        //Variables for btns

        const startStopBtn = document.querySelector('#playPauseBtn');
        const restBtn = document.querySelector('#resetBtn');

        //variables for time values (first value 0:0:0)

        let seconds = 0;
        let minutes = 0;
        let hours = 0;

        //variables for second values (00:00:00)

        let secondvalue = 0; // for seconds
        let minutevalue = 0; // for minutes
        let hourvalue = 0; //for hour

        //variables for start and pause

        let pause = null;
        let start = 'stopped'


        //function
        function stopWatch(){

            //for 0:0:0

            seconds++;

            if(seconds/60 ===1){
                seconds=0;
                minutes++;
                if(minutes/60 ==1){
                    minutes=0;
                    hours++;
                }
            }

            //for (00:00:00)

            if(seconds <10){
                secondvalue = '0' + seconds;
            }else{
                secondvalue = seconds;
            }
            if(minutes <10){
                minutevalue = '0' + minutes;
            }else{
                minutevalue = minutes;
            }
            if(hours <10){
                hourvalue = '0' + hours;
            }else{
                 hourvalue= hours;
            }





            let displayTime = document.getElementById('timer').innerText=
                hourvalue + ':' + minutevalue + ':'+secondvalue;

        }




       startStopBtn.addEventListener('click', function(){

        if(start === 'stopped'){
            pause = window.setInterval(stopWatch,1000);
            document.getElementById('playPauseBtn').innerHTML = `
            <i class="fa-solid fa-pause" id = 'pause' ></i> `;
            start = 'started';

        }else{
            window.clearInterval(pause);
            document.getElementById('playPauseBtn').innerHTML = `
            <i class="fa-solid fa-play" id="play"></i>`
            start = 'stopped'
        }
       })


       //for reset btn:

       resetBtn.addEventListener('click', function(){
        window.clearInterval(pause);
        seconds = 0;
        minutes = 0;
        hours = 0;

        document.getElementById('timer').innerHTML = '00:00:00'
       })