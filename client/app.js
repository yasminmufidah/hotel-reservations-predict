function getIdFromText(text, options) {
    for (var i = 0; i < options.length; i++) {
      if (options[i].text === text) {
        return options[i].value;
      }
    }
    return null;
  }
  
function getMealValue(){
    mealOptions = [
        {"text": "Meal Plan 1", "value": 1},
        {"text": "Meal Plan 2", "value": 2},
        {"text": "Meal Plan 3", "value": 3},
        {"text": "Not Selected", "value": 4}
    ]
    var mealText = document.getElementsByName("meal")[0].value;
    var meal = getIdFromText(mealText, mealOptions)
    return parseInt(meal)
}

function getRoomValue(){
    roomOptions = [
        {"text": "Room Type 1", "value": 1},
        {"text": "Room Type 2", "value": 2},
        {"text": "Room Type 3", "value": 3},
        {"text": "Room Type 4", "value": 4},
        {"text": "Room Type 5", "value": 5},
        {"text": "Room Type 6", "value": 6},
        {"text": "Room Type 7", "value": 7}
    ]
    var roomText = document.getElementsByName("room")[0].value;
    var room = getIdFromText(roomText, roomOptions)
    return parseInt(room)
}

function getYearValue(){
    yearOptions = [
        {"text": "2017", "value": 2017},
        {"text": "2018", "value": 2018}
    ]
    var yearText = document.getElementsByName("year")[0].value;
    var year = getIdFromText(yearText, yearOptions)
    return parseInt(year)
}

function getMarketValue(){
    marketOptions = [
        {"text": "Online", "value": 1},
        {"text": "Offline", "value": 2},
        {"text": "Corporate", "value": 3},
        {"text": "Complementary", "value": 4},
        {"text": "Aviation", "value": 4}
    ]
    var marketText = document.getElementsByName("market")[0].value;
    var market = getIdFromText(marketText, marketOptions)
    return parseInt(market)
}
  
function OnClickedPredict() {
    console.log("Predict button clicked");
    var adults = parseInt(document.getElementById("adults").value);
    console.log("Adults:", adults);
    var children = parseInt(document.getElementById("children").value);
    console.log("Children:", children);
    var weekend = parseInt(document.getElementById("weekend").value);
    console.log("Weekend:", weekend);
    var weekday = parseInt(document.getElementById("weekday").value);
    console.log("Weekday:", weekday);
    var meal = getMealValue();
    console.log("Meal:", meal);
    var parking = parseInt(document.getElementById("parking").value);
    console.log("Parking:", parking);
    var room = getRoomValue();
    console.log("Room:", room);
    var time = parseInt(document.getElementById("time").value);
    console.log("Lead Time:", time);
    var year = getYearValue();
    console.log("Year:", year);
    var month = parseInt(document.getElementById("month").value);
    console.log("Month:", month);
    var date = parseInt(document.getElementById("date").value);
    console.log("Date:", date);
    var market = getMarketValue();
    console.log("Market:", market);
    var repeat = parseInt(document.getElementById("repeat").value);
    console.log("Repeat:", repeat);
    var cancel = parseInt(document.getElementById("cancel").value);
    console.log("Cancel:", cancel);
    var booking = parseInt(document.getElementById("booking").value);
    console.log("Booking:", booking);
    var price = parseFloat(document.getElementById("price").value);
    console.log("Price:", price);
    var request = parseInt(document.getElementById("request").value);
    console.log("Request:", request);
    var predict_reservations = document.getElementById("predict_reservations");
  
    var url = "http://127.0.0.1:5000/predict"
    var data = {
        "no_of_adults": adults,
        "no_of_children": children,
        "no_of_weekend_nights": weekend,
        "no_of_week_nights": weekday,
        "type_of_meal_plan": meal,
        "required_car_parking_space": parking,
        "room_type_reserved": room,
        "lead_time": time,
        "arrival_year" : year,
        "arrival_month": month,
        "arrival_date": date,
        "market_segment_type": market,
        "repeated_guest": repeat,
        "no_of_previous_cancellations": cancel,
        "no_of_previous_bookings_not_canceled": booking,
        "avg_price_per_room": price,
        "no_of_special_requests": request
      }
    $.post({url: url, 
      data: JSON.stringify(data),
      contentType: 'application/json'
      },
        function(data, status) {
        console.log(data.predict_reservations);
        predict_reservations.innerHTML = "<h2>" + data.predict_reservations + " </h2>";
        console.log(status)
    }
    );
  }