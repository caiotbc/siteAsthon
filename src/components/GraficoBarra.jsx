import moment from "moment";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const GraficoBarra = (props) =>
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
        plotBorderWidth: 1,
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
            softMax: 0.2,
            allowDecimals: true,
            title:
            {
                text: "Nível (m)"
            },
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
          },

        series: [{
          type: 'column',
          data: data,
          lineWidth: 0,
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

export default GraficoBarra;