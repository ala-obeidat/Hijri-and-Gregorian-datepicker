var _datePickerLang ="en"
 var _datepickerChange;
        var _datePickerType = "ummalqura"; 
        var _datepickerChange = null;
		var _gregorianDatepicker;
    var _gregorianDatePickerType = "gregorian";
    var _gregorianDatepickerChange = null;
		$(function () {
        //	$.calendars.picker.setDefaults({renderer: $.calendars.picker.themeRollerRenderer}); // Requires jquery.calendars.picker.ext.js
        var calendar = $.calendars.instance(_datePickerType, _datePickerLang);
        $('.datepicker').calendarsPicker({
            calendar: calendar,
            onSelect: function (newDate) { if (_datepickerChange) _datepickerChange(newDate); }
        });
        var gregorianCalendar = $.calendars.instance(_gregorianDatePickerType, _datePickerLang);
        $('.gregorianDatepicker').calendarsPicker({
            calendar: gregorianCalendar,
            onSelect: function (newDate) { if (_gregorianDatepickerChange) _gregorianDatepickerChange(newDate); }
        });
    });