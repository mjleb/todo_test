// status devise 0-off ? 1-active? 2-arhive
var app = new Vue({
    el: '#wrapper',
    data: {
        searchdeviceid:'',
        DeviceView:'',
        DeviceTypeCatalog:[
            {
                "id":"1",
                "name":"Название типа устройства 1",
                "status":"1",
            },
            {
                "id":"2",
                "name":"Название типа устройства 2",
                "status":"0",
            },
        ],
        Status:["Не подключено","Активен","В архиве"],
        Tags:[
            {"id":"1","name":"Липецкая область"},
            {"id":"2","name":"Филиал 7"},
            {"id":"3","name":"Московская область"},
            {"id":"4","name":"Филиал 12"},
        ],
        ConnectedDevices:[
            {
                "id":"2bac7814.3e06ac396d9897fe",
                "status":"1",
                "idtype":"2",
                "tags":["Липецкая область","Филиал 7"], 
                "traffic":"1367",
                "connection_date":"21.02.2020"
            },
            {
                "id":"2bac7814.560da33ae16ace00",
                "status":"0",
                "idtype":"1",
                "tags":["Московская область","Филиал 12"], 
                "traffic":"54",
                "connection_date":"11.01.2020"
            },
            {
                "id":"2bac7814.3e06ac396d9897fe",
                "status":"1",
                "idtype":"1",
                "tags":["Липецкая область","Филиал 7"], 
                "traffic":"1367",
                "connection_date":"21.02.2020"
            },
            {
                "id":"2bac7814.560da33ae16ace00",
                "status":"0",
                "idtype":"2",
                "tags":["Московская область","Филиал 12"], 
                "traffic":"54",
                "connection_date":"11.01.2020"
            },
            {
                "id":"2bac7814.3e06ac396d9897fe",
                "status":"1",
                "idtype":"2",
                "tags":["Липецкая область","Филиал 7"], 
                "traffic":"1367",
                "connection_date":"21.02.2020"
            },
            {
                "id":"2bac7814.560da33ae16ace00",
                "status":"0",
                "idtype":"2",
                "tags":["Московская область","Филиал 12"], 
                "traffic":"54",
                "connection_date":"11.01.2020",
                "comment":"Возможен комментарий по размещению устройства, номе договора и прочее"
            },

        ],
        ArchiveDevices:[
            {
                "id":"2bac7814.3e06ac396d989755",
                "status":"2",
                "idtype":"2",
                "tags":["Липецкая область","Филиал 7"], 
                "traffic":"1367",
                "connection_date":"21.02.2020",
                "archive_date":"23.02.2020",
                "comment":"указана причина архивации устройства"
            },
            {
                "id":"2bac7814.3e06ac396d98456",
                "status":"2",
                "idtype":"2",
                "tags":["Липецкая область","Филиал 7"], 
                "traffic":"1367",
                "connection_date":"21.02.2020",
                "archive_date":"23.02.2020",
            },
            {
                "id":"2bac7814.560da33ae16ac789",
                "status":"2",
                "idtype":"2",
                "tags":["Московская область","Филиал 12"], 
                "traffic":"54",
                "connection_date":"11.01.2020",
                "archive_date":"23.02.2020",
                "comment":"Возможен комментарий по размещению устройства, номе договора и прочее"
            },
        ],
        PagesUser:[
            {"code":"404",
            "name":"Страница не найдена",
            "title":"Ошибка 404",
            "icon":"fa-exclamation-triangle",
            "subpages":[]
            },
            {"code":"dashboard",
            "name":"Рабочий стол",
            "title":"Рабочий стол",
            "icon":"fa-th-large",
            "subpages":[]
            },
            {
            "code":"devices",
            "name":"Устройства",
            "title":"Устройства",
            "icon":"fa-sitemap",
            "subpages":[
                {"code":"add_new_device",
                "name":"Добавить",
                "title":"Добавление нового устройства"
                },
                {"code":"connected_devices",
                "name":"Подключенные",
                "title":"Подключенные устройства"
                },
                {"code":"archive_devices",
                "name":"Архив",
                "title":"Архив устройств"
                },
                {"code":"device",
                "name":"Устройство по ID",
                "title":"Устройство по ID",
                },
                ]
            },
            {
                "code":"traffic",
                "name":"Трафик",
                "title":"Трафик",
                "icon":"fa-bar-chart-o",
                "subpages":[]
            },
            {
                "code":"directory",
                "name":"Справочник",
                "title":"Справочник",
                "icon":"fa-sitemap",
                "subpages":[
                    {"code":"catalog",
                    "name":"Типы устройств",
                    "title":"Типы устройств",
                    "icon":"fa-database",
                    },
                ]
            },            
            {
                "code":"settings",
                "name":"Настройки",
                "title":"Настройки",
                "icon":"fa-cogs",
                "subpages":[]
            },
                        {
                "code":"manual",
                "name":"Помощь",
                "title":"Помощь",
                "icon":"fa-cogfa-info-circle",
                "subpages":[]
            },
            
        ],
        MenuLeft:[
            {"code":"dashboard",
            "name":"Рабочий стол",
            "icon":"fa-th-large",
            "subpages":[]
            },
            {
            "code":"devices",
            "name":"Устройства",
            "icon":"fa-sitemap",
            "subpages":[
                {"code":"add_new_device",
                "name":"+ Добавить",
                "title":"Добавление нового устройства"
                },
                {"code":"connected_devices",
                "name":"Подключенные",
                "title":"Подключенные устройства"
                },
                {"code":"archive_devices",
                "name":"Архив",
                "title":"Архив устройств"
                },
                {"code":"device",
                "name":"Устройство по ID"
                },
                ]
            },
            {"code":"traffic","name":"Трафик","icon":"fa-bar-chart-o","subpages":[]},
            {"code":"directory","name":"Справочник","icon":"fa-database","subpages":[
                {"code":"catalog",
                "name":"Типы устройств"
                },
                {"code":"tags",
                "name":"Теги"
                }, 
            ]},
            {"code":"settings","name":"Настройки","icon":"fa-cogs","subpages":[]},
            
            
        ],
        SelectedPage:{
            "code":"dashboard",
            "name":"Рабочий стол",
            "title":"Рабочий стол"
        },
        Breadcrumb:'',
        selectedDevice:{"id":"","mode":"view"},
        DeviceChartjs:{
            type: 'bar',
            data: {
                labels: ['27 мая','28 мая','29 мая'],
                datasets: [{
                    label: 'Трафик за последние 30 дней',
                    data: [480,485,490],
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }
                ]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        },
    },
    computed:{
        
  
    },
    watch: {
 
        
    },
    updated() {
        if(this.SelectedPage.code=='dashboard'){  
            var ctx = document.getElementById('myChart').getContext('2d');
            var myChart = new Chart(ctx,optionChartjs);
        }
        if(this.SelectedPage.code=='device'){
            var ctxD = document.getElementById('DeviceChartjs').getContext('2d');
            var DeviceChartjs = new Chart(ctxD,this.DeviceChartjs);
            this.DeviceChartjsGet(40);
             
        }
        if(this.SelectedPage.code=='connected_devices'){
            $('.footable').footable();
            $('.collapse-link').on('click', function (e) {
                e.preventDefault();
                var ibox = $(this).closest('div.ibox');
                var button = $(this).find('i');
                var content = ibox.children('.ibox-content');
                content.slideToggle(200);
                button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
                ibox.toggleClass('').toggleClass('border-bottom');
                setTimeout(function () {
                    ibox.resize();
                    ibox.find('[id^=map-]').resize();
                }, 50);
            });
            $('.collapse-link-button').on('click', function (e) {
                e.preventDefault();
                var ibox = $(this).closest('div.ibox');
                var button = $(this).find('i');
                var content = ibox.children('.ibox-content');
                content.slideToggle(200);
            
                ibox.toggleClass('').toggleClass('border-bottom');
                setTimeout(function () {
                    ibox.resize();
                    ibox.find('[id^=map-]').resize();
                }, 50);
            });
        
            // Close ibox function
            $('.close-link').on('click', function (e) {
                e.preventDefault();
                var content = $(this).closest('div.ibox');
                content.remove();
            });

 
            $(".select2_demo_2").select2({
                theme: 'bootstrap4',
            });
            $('#data_5 .input-daterange').datepicker({
                keyboardNavigation: false,
                forceParse: false,
                autoclose: true
            });
 
 
        }
        if(this.SelectedPage.code=='add_new_device'){
            $(".select2_demo_2").select2({
                theme: 'bootstrap4',
            });
        }
        
    },
    methods: {

        MenuSelected:  function(page,parentpage) {
        
          this.SelectedPage=page;
          this.Breadcrumb=parentpage;
 
          console.log('Страница: '+this.SelectedPage.name);

        },
        PageSelected:  function(code) {
            console.log('Поиск страницы');
            //this.SelectedPage=page;
            //this.Breadcrumb=parentpage;
            var find=0;
            for (var page of this.PagesUser) {
                //console.log('страницы');
                if(page.code==code){
                    find=1;
                    this.SelectedPage=page;
                    this.Breadcrumb='';
                    console.log('Найдена страница: '+page.title);
                }
                for (var subpage of page.subpages) {
                    //console.log('Подстраницы');
                    if(subpage.code==code){
                        find=1;
                        this.SelectedPage=subpage;
                        this.Breadcrumb=page;
                        console.log('Найдена страница: '+subpage.title);
                    }
                    if (find==1){ break;}
                }
                if (find==1){ break;}
            }  
            
            if (find==0){console.log('Ошибка 404 ');}
        },
        FindTypeDevice: function(id){
            var returnname="-";
            for (var typed of this.DeviceTypeCatalog) {
                console.log('Тип устройства: '+typed.name);
                if(typed.id==id){returnname=typed.name; break;}
            }
            return returnname;
            
        },        
        DeviceSelected:  function(){
            this.searchdeviceid=this.searchdeviceid.replace(/ +/g,"") ;
            console.log('Устройство '+this.searchdeviceid);
            var find=0;
            for (var device of this.ConnectedDevices) {
                if(device.id==this.searchdeviceid){
                    find=1;
                    this.DeviceView=device;
                    console.log('Устройство найдено: '+device.id);
                }
                if (find==1){ break;}
            }
            if (find==0){
                for (var device of this.ArchiveDevices) {
                    if(device.id==this.searchdeviceid){
                        find=1;
                        this.DeviceView=device;
                        console.log('Устройство найдено: '+device.id);
                    }
                    if (find==1){ break;}
                }
                
            }
            if (find==0){console.log('Устройство не найдено!');}

        },
        DeviceLinkView:  function(deviceid){
            this.searchdeviceid=deviceid;
            this.DeviceSelected();
            this.PageSelected('device');
 

        },
        DeviceChartjsGet:function(period=30){    
            this.DeviceChartjs.data.datasets[0].label='Трафик за последние '+period+' дней',
            this.DeviceChartjs.data.labels=[];
            this.DeviceChartjs.data.datasets[0].data=[];
          
            var dateselect=new Date();
            dateselect.setDate(dateselect.getDate() - period);
            var devicetrafic=30;
            for (let i = 1; i <= period; i++) {
                dateselect.setDate(dateselect.getDate() + 1);
 
                this.DeviceChartjs.data.labels.push(dateselect.toLocaleDateString());
                devicetrafic=devicetrafic+1;
                this.DeviceChartjs.data.datasets[0].data.push(devicetrafic);
            }
            
           //this.DeviceChartjs.data.labels=['1','2','3'];
           //this.DeviceChartjs.data.datasets[0].data=['10','20','30'];
            
        },
 
    }
});