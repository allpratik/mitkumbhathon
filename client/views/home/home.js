Template.home.events({
  "submit form#new-option": function(e) {
    e.preventDefault();
    var input = $("input#option-to-add");
    Options.insert({ name: input.val(), votes: 0 });
    input.val("");
  },

  "click .remove-option": function(e) {
    var id = $(e.target).closest("li").prop("id");
    Options.remove({_id: id});
  },

	"click a#logout" : function(e,t){
		e.preventDefault();
		Meteor.logout();
	}
});

Template.home.rendered = function() {
  var seriesData = [];
  var options = Options.find({});

  options.forEach(function(option) {
    var dataPoint = [option.name, option.votes];
    seriesData.push(dataPoint);
  });

  chartOptions = {
        chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: "pie",
        renderTo: "highchart"
    },
    title: {
        text: ''
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    credits: {
      enabled: false
    },
    series: [{
        type: 'pie',
        name: 'Lunch Options',
        data: seriesData
    }]
  };

  var chart = new Highcharts.Chart(chartOptions);
};

Template.home.helpers({
  gravatar: function() {
      return Gravatar.imageUrl(Meteor.user().emails[0].address);
    },

  yesterday: function() {
    var yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return yesterday.toString().substring(0,15);
  },

  today: function() {
    return new Date().toString().substring(0,15);
  },

  tomorrow: function() {
    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toString().substring(0,15);
  }
});
