const mijnauto = {
    snelheid: 0,

    gasgeven: function () {
        this.snelheid += 5;
        console.log(this.snelheid);
    },

    toeteren: function () {
        console.log("Toet!")
    }
};

mijnauto.toeteren();
mijnauto.gasgeven();
