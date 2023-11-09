let i = 1;
let scoreA = [];
let scoreB = [];
const box = document.querySelectorAll('.inner');

box.forEach(function(item , index){
    item.onclick = function(){
        i += 1;



        if (this.classList.contains("circle") || this.classList.contains("cross")) {
            window.alert('既にマークされています');
            i -= 1;
        } else if ((i % 2) === 0) {
            this.classList.add("circle");
            scoreA.push(parseInt(this.dataset.number));
        } else {
            this.classList.add("cross");
            scoreB.push(parseInt(this.dataset.number));
        };



        this.classList.add("checked");



        if ((scoreA.includes(0) && scoreA.includes(1) && scoreA.includes(2)) ||
            (scoreA.includes(3) && scoreA.includes(4) && scoreA.includes(5)) ||
            (scoreA.includes(5) && scoreA.includes(6) && scoreA.includes(7)) ||
            (scoreA.includes(0) && scoreA.includes(3) && scoreA.includes(6)) ||
            (scoreA.includes(1) && scoreA.includes(4) && scoreA.includes(7)) ||
            (scoreA.includes(2) && scoreA.includes(5) && scoreA.includes(8)) ||
            (scoreA.includes(0) && scoreA.includes(4) && scoreA.includes(8)) ||
            (scoreA.includes(2) && scoreA.includes(4) && scoreA.includes(6))) {
            window.alert("Winner マル");
            location.reload();
        };

        if ((scoreB.includes(0) && scoreB.includes(1) && scoreB.includes(2)) ||
            (scoreB.includes(3) && scoreB.includes(4) && scoreB.includes(5)) ||
            (scoreB.includes(5) && scoreB.includes(6) && scoreB.includes(7)) ||
            (scoreB.includes(0) && scoreB.includes(3) && scoreB.includes(6)) ||
            (scoreB.includes(1) && scoreB.includes(4) && scoreB.includes(7)) ||
            (scoreB.includes(2) && scoreB.includes(5) && scoreB.includes(8)) ||
            (scoreB.includes(0) && scoreB.includes(4) && scoreB.includes(8)) ||
            (scoreB.includes(2) && scoreB.includes(4) && scoreB.includes(6))) {
            window.alert("Winner バツ");
            location.reload();
        };
    };
});
