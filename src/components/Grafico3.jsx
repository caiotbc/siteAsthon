import moment from "moment";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const Grafico3 = (props) =>
{

    let data = props.data;
    //console.log(data);
    const options = {
        colors: [
            '#2b908f', '#90ee7e', '#f45b5b', '#7798BF', '#aaeeee', '#ff0066',
            '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'
        ],
        chart: {
          zoomType: 'x',
          backgroundColor: '#111111',
        plotBackgroundColor: 'rgba(15, 15, 15, .9)',
        plotShadow: true,
        plotBorderWidth: 1
        },
      
        title: {
          text: props.title,

          style: {
            color: '#FFF',
            font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
        }
        },
      
        //subtitle: {
        // text: 'Um subtitulo',
         // style: {
         //   color: '#FFFFFF',
         //   font: 'bold 12px "Trebuchet MS", Verdana, sans-serif'
        // }
        //},
      
        accessibility: {
          screenReaderSection: {
            beforeChartFormat: '<{headingTagName}>{chartTitle}</{headingTagName}><div>{chartSubtitle}</div><div>{chartLongdesc}</div><div>{xAxisDescription}</div><div>{yAxisDescription}</div>'
          }
        },
      
        tooltip: {
          valueDecimals: 2
        },
        
        yAxis:
        {
            gridLineWidth: 0.3,
            softMax: 3,
            allowDecimals: true,
            title:
            {
                text: "Nível (m)"
            },
            plotLines:
            [{
                color: "#FFFF00",
                label:
                {
                    style: {
                        color: 'white',
                        fontWeight: 'bold'
                    },
                    x: 5,
                    y: -4,
                    text: "Alerta"
                },
                value: 1.9
            },
            {
                color: "#FF0000",
                label:
                {
                    style: {
                        color: 'white',
                        fontWeight: 'bold'
                    },
                    x: 5,
                    y: -4,
                    text: "Transbordamento"
                },
                value: 2.3
            }]
        },
        xAxis: {
          type: 'datetime',
          title:
          {
            text: "Tempo"
          },

        },
        credits: {
            enabled: true
          },
   
          plotOptions: {
            series: {
                dataLabels: {
                    color: '#F0F0F3',
                    style: {
                        fontSize: '13px'
                    }
                },
                marker: {
                    lineColor: '#333'
                }
            },
            area: {
                fillColor: {
                    linearGradient: {
                      x1: 0,
                      y1: 0,
                      x2: 0,
                      y2: 1
                    },
                    stops: [
                      [0, '#2b908f'],
                      [1, Highcharts.color('#2b908f').setOpacity(0.4).get('rgba')]
                    ]
                  },
              marker: {
                radius: 2
              },
              lineWidth: 1,
              states: {
                hover: {
                  lineWidth: 1
                }
              },
              threshold: null
            }
          },

        series: [{
          type: 'area',
          data: data,
          lineWidth: 0.5,
          name: props.title
        }]
      };
    return (
        <div>
            <HighchartsReact containerProps={{ style: {width: "100%" , height: "400px" } }}
                highcharts={Highcharts}
                options={options}
            />
        </div>
    );
}

export default Grafico3;