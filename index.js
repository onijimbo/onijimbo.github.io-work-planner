// runs script after index loads
$(document).ready(function (){

    let currentDate = moment().format('LLLL');
    // console.log(currentDate);
    $('#currentDay').text(currentDate);

    let now = moment();
    let hour = now.hour();
    // let hour = 10;
    console.log(hour)
    let timeBlocks = $('.time-block')

   
   

    const nine = $('.text9')
    const ten = $('.text10')
    const eleven = $('.text11')
    const twelve = $('.text12')
    const one = $('.text13')
    const two = $('.text14')
    const three = $('.text15')
    const four = $('.text16')
    const five = $('.text17')

    $('.saveButton').on('click', function(event){
        event.preventDefault()
        let plan = $(this).siblings('#text-area').val();
        let keyHR = $(this).parent().parent('.time-block').attr('id');
        // console.log(keyHR);
        // console.log(nine.val())
        localStorage.setItem(keyHR, plan);
    })


    nine.text(localStorage.getItem('9'));
    ten.text(localStorage.getItem('10'));
    eleven.text(localStorage.getItem('11'));
    twelve.text(localStorage.getItem('12'));
    one.text(localStorage.getItem('13'));
    two.text(localStorage.getItem('14'));
    three.text(localStorage.getItem('15'));
    four.text(localStorage.getItem('16'));
    five.text(localStorage.getItem('17'));
    
    $('.reset').on('click', ()=>{
        localStorage.clear()
        location.reload()
    });

    for (let i = 0; i < timeBlocks.length; i++) {
        let blockTime = $(timeBlocks[i]);
        let hourId = blockTime.attr("id");
        // console.log(hourId);

        if (hourId === hour) {
            $(blockTime).children(".row").addClass("present");
        }

        if (hourId < hour) {
            $(blockTime).children(".row").addClass("past");
            // console.log('test')


        } else
            if (hourId > hour) {
                $(blockTime).children(".row").addClass("future");
                // console.log('hi')
            }
    }

        
});