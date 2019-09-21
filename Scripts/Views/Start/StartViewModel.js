class StartViewModel
{
    constructor($http, $window)
    {
        this.Http = $http;
        this.Window = $window;
        this.Now = [];
        this.Icono = [];
        this.Next = [];
        this.Next1 = [];
        this.Next2 = [];
        this.NextDays = [];
    }

    ShowConsult()
    {
        var cp = document.getElementById("Codigo").value;
        this.GetAllWeather(cp);
    };

    GetAllWeather(cp)
    {
        this.Http.get("https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?zip="+cp+",es&APPID=afa5b2905c2ddefa898b50054a2e7584")
            .then((response) =>
            {
                var jsonNowCiudad = response.data.city.name;
                var jsonNowTemperatura = response.data.list[0].main.temp.toFixed(0) / 10;
                var jsonNowIcono = response.data.list[0].weather[0].icon;

                this.Now = jsonNowCiudad + " Temperatura: " + jsonNowTemperatura + "º"; 
                this.Icono = "https://cors-anywhere.herokuapp.com/http://openweathermap.org/img/wn/" + jsonNowIcono + ".png";

                this.Next = response.data.list[0].dt_txt;
                this.Next1 = response.data.list[1].dt_txt;
                this.Next2 = response.data.list[2].dt_txt;
            });
    }
}

app.component('start',
{
    templateUrl: 'Scripts/Views/Start/StartView.html',
    controller: StartViewModel,
    controllerAs: "vm"
});
