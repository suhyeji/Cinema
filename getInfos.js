function getKoreanTitle(movieTitle) {
    switch(movieTitle) {
        case('notebook'):
            return "노트북";
            break;
        case('ourTimes'):
            return "나의 소녀시대";
            break;
        case('eternalSunshine'):
            return "이터널 선샤인";
            break;
        case('aboutTime'):
            return "어바웃 타임";
            break;
        case('nottingHill'):
            return "노팅 힐";
    }
}

function getDay(dateInfo) {
    switch(dateInfo.substring(4, 7)) {
        case('mon'):
            return "월";
            break;
        case('tue'):
            return "화";
            break;   
        case('wed'):
            return "수";
            break;
        case('thu'):
            return "목";
            break;
        case('fri'):
            return "금";
            break;
        case('sat'):
            return "토";
            break;
        case('sun'):
            return "일";
    }
}

function getTime(movieTitle, time) {
    time = parseInt(time);
    switch(movieTitle) {
        case('notebook'):
        case('aboutTime'):
            startTime = time + ":00";
            endTime = (time + 2) + ":03";
            break;
        case('ourTimes'):
            startTime = time + ":00";
            endTime = (time + 2) + ":14";
            break;
        case('eternalSunshine'):
            startTime = time + ":00";
            endTime = (time + 1) + ":47";
            break;
        case('nottingHill'):
            startTime = time + ":00";
            endTime = (time + 2) + ":04";
    }
}

function getAge(movieTitle) {
    switch(movieTitle) {
        case('notebook'):
        case('aboutTime'):
        case('ourTimes'):
        case('eternalSunshine'):
            return 15;
            break;
        case('nottingHill'):
            return 12;
    }
}