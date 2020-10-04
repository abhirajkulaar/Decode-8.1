  
        var mymap = L.map('mapid').setView([23, 78], 5.3);
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWJoaXJhamt1bGFhIiwiYSI6ImNrZnNweWNlbDA5aWIzM3Q4NmNycHFqNTUifQ.vyYQ9Q_B4lnPDrH-uEDpRQ', {
    attribution: 'made by - <a href="https://www.linkedin.com/in/abhiraj-kulaar-85b156177/">Abhiraj Singh Kulaar</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);








window.val=1000000
window.val2=3000000
window.sizeby="Active"

changeToState()



function changeToState(){
    var stateData= [
        {
            "State": "Andaman and Nicobar Islands",
            "Cases": "3848",
            "Deaths": "53",
            "Recoveries": "3623",
            "Active": "172",
            "Cord_X": "11.66702557",
            "Cord_Y": "92.73598262"
        },
        {
            "State": "Andhra Pradesh",
            "Cases": "700235",
            "Deaths": "5869",
            "Recoveries": "636508",
            "Active": "57858",
            "Cord_X": "14.7504291",
            "Cord_Y": "78.57002559"
        },
        {
            "State": "Arunachal Pradesh",
            "Cases": "10020",
            "Deaths": "16",
            "Recoveries": "7049",
            "Active": "2955",
            "Cord_X": "27.10039878",
            "Cord_Y": "93.61660071"
        },
        {
            "State": "Assam",
            "Cases": "182,396",
            "Deaths": "711",
            "Recoveries": "147522",
            "Active": "34163",
            "Cord_X": "26.7499809",
            "Cord_Y": "94.21666744"
        },
        {
            "State": "Bihar",
            "Cases": "184038",
            "Deaths": "904",
            "Recoveries": "171048",
            "Active": "12086",
            "Cord_X": "25.78541445",
            "Cord_Y": "85.2"
        },
        {
            "State": "Chandigarh",
            "Cases": "12057",
            "Deaths": "164",
            "Recoveries": "10009",
            "Active": "1884",
            "Cord_X": "30.71999697",
            "Cord_Y": "76.78000565"
        },
        {
            "State": "Chhattisgarh",
            "Cases": "116153",
            "Deaths": "986",
            "Recoveries": "84699",
            "Active": "30468",
            "Cord_X": "22.09042035",
            "Cord_Y": "82.15998734"
        },
        {
            "State": "Dadra and Nagar Haveli and Daman and Diu",
            "Cases": "3054",
            "Deaths": "2",
            "Recoveries": "2939",
            "Active": "113",
            "Cord_X": "20.26657819",
            "Cord_Y": "73.0166178"
        },
        {
            "State": "Delhi",
            "Cases": "282752",
            "Deaths": "5401",
            "Recoveries": "250613",
            "Active": "26738",
            "Cord_X": "28.6699929",
            "Cord_Y": "77.23000403"
        },
        {
            "State": "Goa",
            "Cases": "33942",
            "Deaths": "440",
            "Recoveries": "28525",
            "Active": "4977",
            "Cord_X": "15.491997",
            "Cord_Y": "73.81800065"
        },
        {
            "State": "Gujarat",
            "Cases": "138583",
            "Deaths": "3460",
            "Recoveries": "118433",
            "Active": "16690",
            "Cord_X": "23.28",
            "Cord_Y": "73.75"
        },
        {
            "State": "Haryana",
            "Cases": "129912",
            "Deaths": "1402",
            "Recoveries": "115038",
            "Active": "13472",
            "Cord_X": "29.02",
            "Cord_Y": "76"
        },
        {
            "State": "Himachal Pradesh",
            "Cases": "15219",
            "Deaths": "195",
            "Recoveries": "11608",
            "Active": "3416",
            "Cord_X": "31.98",
            "Cord_Y": "77.36659704"
        },
        {
            "State": "Jammu and Kashmir",
            "Cases": "76163",
            "Deaths": "1198",
            "Recoveries": "58552",
            "Active": "16413",
            "Cord_X": "34.29995933",
            "Cord_Y": "74.46665849"
        },
        {
            "State": "Jharkhand",
            "Cases": "84664",
            "Deaths": "721",
            "Recoveries": "72461",
            "Active": "11482",
            "Cord_X": "23.80039349",
            "Cord_Y": "86.41998572"
        },
        {
            "State": "Karnataka",
            "Cases": "611837",
            "Deaths": "8994",
            "Recoveries": "492412",
            "Active": "110431",
            "Cord_X": "15.01",
            "Cord_Y": "75.86"
        },
        {
            "State": "Kerala",
            "Cases": "204241",
            "Deaths":"742",
            "Recoveries": "131052",
            "Active": "72418",
            "Cord_X": "8.900372741",
            "Cord_Y": "76.56999263"
        },
        {
            "State": "Ladakh",
            "Cases": "4360",
            "Deaths": "61",
            "Recoveries": "3232",
            "Active": "1067",
            "Cord_X": "34",
            "Cord_Y": "78.08"
        },
        {
            "State": "Lakshadweep",
            "Cases": "0",
            "Deaths": "0",
            "Recoveries": "0",
            "Active": "0",
            "Cord_X": "10.56257331",
            "Cord_Y": "72.63686717"
        },
        {
            "State": "Madhya Pradesh",
            "Cases": "130088",
            "Deaths": "2336",
            "Recoveries": "107279",
            "Active": "20473",
            "Cord_X": "21.30039105",
            "Cord_Y": "76.13001949"
        },
        {
            "State": "Maharashtra",
            "Cases": "1400922",
            "Deaths": "37056",
            "Recoveries": "1104426",
            "Active": "259440",
            "Cord_X": "19.25023195",
            "Cord_Y": "73.16017493"
        },
        {
            "State": "Manipur",
            "Cases": "11111",
            "Deaths": "68",
            "Recoveries": "8641",
            "Active": "2402",
            "Cord_X": "24.79997072",
            "Cord_Y": "93.95001705"
        },
        {
            "State": "Meghalaya",
            "Cases": "5802",
            "Deaths": "51",
            "Recoveries": "4001",
            "Active": "1750",
            "Cord_X": "25.57049217",
            "Cord_Y": "91.8800142"
        },
        {
            "State": "Mizoram",
            "Cases": "2049",
            "Deaths": "0",
            "Recoveries": "1721",
            "Active": "328",
            "Cord_X": "23.71039899",
            "Cord_Y": "92.72001461"
        },
        {
            "State": "Nagaland",
            "Cases": "6244",
            "Deaths": "17",
            "Recoveries": "5144",
            "Active": "1083",
            "Cord_X": "25.6669979",
            "Cord_Y": "94.11657019"
        },
        {
            "State": "Odisha",
            "Cases": "222734",
            "Deaths": "859",
            "Recoveries": "190080",
            "Active": "31795",
            "Cord_X": "19.82042971",
            "Cord_Y": "85.90001746"
        },
        {
            "State": "Puducherry",
            "Cases": "28024",
            "Deaths": "525",
            "Recoveries": "22505",
            "Active": "4994",
            "Cord_X": "11.93499371",
            "Cord_Y": "79.83000037"
        },
        {
            "State": "Punjab",
            "Cases": "115151",
            "Deaths": "3451",
            "Recoveries": "95937",
            "Active": "15763",
            "Cord_X": "30.83",
            "Cord_Y": "75.34"
        },
        {
            "State": "Rajasthan",
            "Cases": "137485",
            "Deaths": "1500",
            "Recoveries": "115178",
            "Active": "20807",
            "Cord_X": "26.44999921",
            "Cord_Y": "74.63998124"
        },
        {
            "State": "Sikkim",
            "Cases": "3050",
            "Deaths": "39",
            "Recoveries": "2375",
            "Active": "636",
            "Cord_X": "27.3333303",
            "Cord_Y": "88.6166475"
        },
        {
            "State": "Tamil Nadu",
            "Cases": "603290",
            "Deaths": "9586",
            "Recoveries": "547335",
            "Active": "46369",
            "Cord_X": "11.1",
            "Cord_Y": "79.88"
        },
        {
            "State": "Telangana",
            "Cases": "195609",
            "Deaths": "1145",
            "Recoveries": "165844",
            "Active": "28620",
            "Cord_X": "17.69",
            "Cord_Y": "79"
        },
        {
            "State": "Tripura",
            "Cases": "26362",
            "Deaths": "286",
            "Recoveries": "20596",
            "Active": "5480",
            "Cord_X": "23.83540428",
            "Cord_Y": "91.27999914"
        },
        {
            "State": "Uttarakhand",
            "Cases": "49248",
            "Deaths": "625",
            "Recoveries": "40079",
            "Active": "8544",
            "Cord_X": "30.36",
            "Cord_Y": "79"
        },
        {
            "State": "Uttar Pradesh",
            "Cases": "403101",
            "Deaths": "5864",
            "Recoveries": "346859",
            "Active": "50378",
            "Cord_X": "26.91",
            "Cord_Y": "81.33"
        },
        {
            "State": "West Bengal",
            "Cases": "260324",
            "Deaths": "5017",
            "Recoveries": "228755",
            "Active": "26552",
            "Cord_X": "22.58039044",
            "Cord_Y": "88.32994665"
        }
    ]
    for(var i=0;i<stateData.length;i++)
{

    var circle = L.circle([stateData[i].Cord_X, stateData[i].Cord_Y], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: (parseFloat(stateData[i][document.getElementById("criteria").value.split(",")[0]])/parseInt(document.getElementById("criteria").value.split(",")[1]))*window.val
    //stateData[i].cases/6211672
}).addTo(mymap);
circle.bindPopup("<b>"+stateData[i].State+"</b><br>Cases:"+stateData[i].Cases+"<br>Active:"+stateData[i].Active+"<br>Recovered:"+stateData[i].Recoveries+"<br>Deaths:"+stateData[i].Deaths);




}


}


function changeToDistrict(){
    var stateData=[
    {
    "State": "Amritsar",
    "Cases": "10144",
    "Recoveries": "8470",
    "Deaths": "363",
    "Active": "1311",
    "Cord_X": "31.634308",
    "Cord_Y": "74.873679"
},
{
    "State": "Barnala",
    "Cases": "1839",
    "Recoveries": "1420",
    "Deaths": "43",
    "Active": "376",
    "Cord_X": "30.376201",
    "Cord_Y": "75.543593"
},
{
    "State": "Bathinda",
    "Cases": "5954",
    "Recoveries": "4319",
    "Deaths": "116",
    "Active": "1519",
    "Cord_X": "30.208108",
    "Cord_Y": "74.948537"
},
{
    "State": "Faridkot",
    "Cases": "2759",
    "Recoveries": "2346",
    "Deaths": "44",
    "Active": "369",
    "Cord_X": "30.666667",
    "Cord_Y": "74.75"
},
{
    "State": "Fatehgarh Sahib",
    "Cases": "1920",
    "Recoveries": "1662",
    "Deaths": "83",
    "Active": "175",
    "Cord_X": "59.917185",
    "Cord_Y": "5.315744"
},
{
    "State": "Fazilka",
    "Cases": "2415",
    "Recoveries": "1781",
    "Deaths": "35",
    "Active": "599",
    "Cord_X": "30.406689",
    "Cord_Y": "74.030525"
},
{
    "State": "Ferozepur",
    "Cases": "3780",
    "Recoveries": "3232",
    "Deaths": "99",
    "Active": "449",
    "Cord_X": "30.961178",
    "Cord_Y": "74.609248"
},
{
    "State": "Gurdaspur",
    "Cases": "5991",
    "Recoveries": "5031",
    "Deaths": "148",
    "Active": "812",
    "Cord_X": "32.036879",
    "Cord_Y": "75.405407"
},
{
    "State": "Hoshiarpur",
    "Cases": "4587",
    "Recoveries": "3808",
    "Deaths": "160",
    "Active": "619",
    "Cord_X": "31.532852",
    "Cord_Y": "75.902549"
},
{
    "State": "Jalandhar",
    "Cases": "13157",
    "Recoveries": "11179",
    "Deaths": "394",
    "Active": "1584",
    "Cord_X": "31.332623",
    "Cord_Y": "75.576957"
},
{
    "State": "Kapurthala",
    "Cases": "3290",
    "Recoveries": "2530",
    "Deaths": "142",
    "Active": "618",
    "Cord_X": "31.381502",
    "Cord_Y": "75.384377"
},
{
    "State": "Ludhiana",
    "Cases": "18088",
    "Recoveries": "16352",
    "Deaths": "744",
    "Active": "992",
    "Cord_X": "30.909016",
    "Cord_Y": "75.851601"
},
{
    "State": "Mansa",
    "Cases": "1578",
    "Recoveries": "1316",
    "Deaths": "30",
    "Active": "232",
    "Cord_X": "23.4354",
    "Cord_Y": "72.6618"
},
{
    "State": "Moga",
    "Cases": "2263",
    "Recoveries": "1863",
    "Deaths": "70",
    "Active": "330",
    "Cord_X": "30.822341",
    "Cord_Y": "75.173097"
},
{
    "State": "Pathankot",
    "Cases": "3730",
    "Recoveries": "2819",
    "Deaths": "80",
    "Active": "831",
    "Cord_X": "32.269245",
    "Cord_Y": "75.652886"
},
{
    "State": "Patiala",
    "Cases": "11636",
    "Recoveries": "10126",
    "Deaths": "325",
    "Active": "1185",
    "Cord_X": "30.329561",
    "Cord_Y": "76.412782"
},
{
    "State": "Rupnagar",
    "Cases": "2108",
    "Recoveries": "1535",
    "Deaths": "78",
    "Active": "495",
    "Cord_X": "30.971444",
    "Cord_Y": "76.530209"
},
{
    "State": "Mohali",
    "Cases": "10516",
    "Recoveries": "8519",
    "Deaths": "191",
    "Active": "1806",
    "Cord_X": "30.728768",
    "Cord_Y": "76.713808"
},
{
    "State": "Sangrur",
    "Cases": "3571",
    "Recoveries": "3090",
    "Deaths": "146",
    "Active": "335",
    "Cord_X": "30.243201",
    "Cord_Y": "75.835812"
},
{
    "State": "Shahid Bhagat Singh Nagar",
    "Cases": "1642",
    "Recoveries": "1350",
    "Deaths": "48",
    "Active": "244",
    "Cord_X": "31.12",
    "Cord_Y": "76.12"
},
{
    "State": "Sri Muktsar Sahib",
    "Cases": "2520",
    "Recoveries": "1898",
    "Deaths": "44",
    "Active": "578",
    "Cord_X": "30.4692",
    "Cord_Y": "74.5182"
},
{
    "State": "Tarn Taran",
    "Cases": "1663",
    "Recoveries": "1291",
    "Deaths": "68",
    "Active": "304",
    "Cord_X": "31.455525",
    "Cord_Y": "74.926962"
}, {
            "State": "Anantapur",
            "Cases": "57708",
            "Deaths": "491",
            "Recoveries": "55406",
            "Active": "1811",
            "Cord_X": "14.678322",
            "Cord_Y": "77.606504"
        },
        {
            "State": "Chittoor",
            "Cases": "62746",
            "Deaths": "662",
            "Recoveries": "56127",
            "Active": "5957",
            "Cord_X": "13.215835",
            "Cord_Y": "79.097129"
        },
        {
            "State": "East Godavari",
            "Cases": "98160",
            "Deaths": "528",
            "Recoveries": "88252",
            "Active": "9380",
            "Cord_X": "17.67643",
            "Cord_Y": "80.88271"
        },
        {
            "State": "Guntur",
            "Cases": "55284",
            "Deaths": "534",
            "Recoveries": "49143",
            "Active": "5607",
            "Cord_X": "16.291519",
            "Cord_Y": "80.454159"
        },
        {
            "State": "Krishna",
            "Cases": "27852",
            "Deaths": "446",
            "Recoveries": "24694",
            "Active": "2712",
            "Cord_X": "16.40982",
            "Cord_Y": "77.32897"
        },
        {
            "State": "Kurnool",
            "Cases": "56423",
            "Deaths": "464",
            "Recoveries": "54252",
            "Active": "1707",
            "Cord_X": "15.830925",
            "Cord_Y": "78.042537"
        },
        {
            "State": "Prakasam",
            "Cases": "49032",
            "Deaths": "489",
            "Recoveries": "41159",
            "Active": "7384",
            "Cord_X": "13.0506",
            "Cord_Y": "80.24506"
        },
        {
            "State": "Nellore",
            "Cases": "52807",
            "Deaths": "447",
            "Recoveries": "49897",
            "Active": "2463",
            "Cord_X": "14.449372",
            "Cord_Y": "79.987376"
        },
        {
            "State": "Srikakulam",
            "Cases": "39919",
            "Deaths": "321",
            "Recoveries": "35921",
            "Active": "3677",
            "Cord_X": "18.29494",
            "Cord_Y": "83.893875"
        },
        {
            "State": "Visakhapatnam",
            "Cases": "50305",
            "Deaths": "437",
            "Recoveries": "46164",
            "Active": "3704",
            "Cord_X": "17.723128",
            "Cord_Y": "83.301284"
        },
        {
            "State": "Vizianagaram",
            "Cases": "35426",
            "Deaths": "218",
            "Recoveries": "32377",
            "Active": "2831",
            "Cord_X": "18.1152",
            "Cord_Y": "83.3982"
        },
        {
            "State": "West Godavari",
            "Cases": "67460",
            "Deaths": "455",
            "Recoveries": "59910",
            "Active": "7095",
            "Cord_X": "16.42966",
            "Cord_Y": "81.67985"
        },
        {
            "State": "Kadapa",
            "Cases": "44218",
            "Deaths": "377",
            "Recoveries": "40311",
            "Active": "3530",
            "Cord_X": "14.465612",
            "Cord_Y": "78.816408"
        },
        {
            "State": "Anjaw",
            "Cases": "110",
            "Deaths": "0",
            "Recoveries": "94",
            "Active": "16",
            "Cord_X": "27.99413",
            "Cord_Y": "96.83821"
        },
        {
            "State": "Changlang",
            "Cases": "809",
            "Deaths": "2",
            "Recoveries": "672",
            "Active": "135",
            "Cord_X": "27.139458",
            "Cord_Y": "95.736189"
        },
        {
            "State": "East Kameng",
            "Cases": "274",
            "Deaths": "0",
            "Recoveries": "256",
            "Active": "18",
            "Cord_X": "27.3",
            "Cord_Y": "93.05"
        },
        {
            "State": "East Siang",
            "Cases": "558",
            "Deaths": "1",
            "Recoveries": "447",
            "Active": "110",
            "Cord_X": "28.00715",
            "Cord_Y": "95.15934"
        },
        {
            "State": "Kamle",
            "Cases": "4",
            "Deaths": "0",
            "Recoveries": "3",
            "Active": "1",
            "Cord_X": "46.191205",
            "Cord_Y": "18.261346"
        },
        {
            "State": "Kra Daadi",
            "Cases": "29",
            "Deaths": "0",
            "Recoveries": "4",
            "Active": "25",
            "Cord_X": "53.079935",
            "Cord_Y": "-119.678593"
        },
        {
            "State": "Kurung Kumey",
            "Cases": "82",
            "Deaths": "0",
            "Recoveries": "49",
            "Active": "33",
            "Cord_X": "28.020299",
            "Cord_Y": "93.318774"
        },
        {
            "State": "Lepa Rada",
            "Cases": "100",
            "Deaths": "0",
            "Recoveries": "90",
            "Active": "10",
            "Cord_X": "45.62769",
            "Cord_Y": "12.69127"
        },
        {
            "State": "Lohit",
            "Cases": "262",
            "Deaths": "0",
            "Recoveries": "212",
            "Active": "50",
            "Cord_X": "28",
            "Cord_Y": "96.5"
        },
        {
            "State": "Longding",
            "Cases": "173",
            "Deaths": "0",
            "Recoveries": "123",
            "Active": "50",
            "Cord_X": "49.585763",
            "Cord_Y": "0.524298"
        },
        {
            "State": "Lower Dibang Valley",
            "Cases": "208",
            "Deaths": "0",
            "Recoveries": "185",
            "Active": "23",
            "Cord_X": "39.390897",
            "Cord_Y": "-99.066067"
        },
        {
            "State": "Lower Siang",
            "Cases": "241",
            "Deaths": "0",
            "Recoveries": "172",
            "Active": "69",
            "Cord_X": "39.390897",
            "Cord_Y": "-99.066067"
        },
        {
            "State": "Lower Subansiri",
            "Cases": "205",
            "Deaths": "1",
            "Recoveries": "160",
            "Active": "44",
            "Cord_X": "27.8",
            "Cord_Y": "93.6"
        },
        {
            "State": "Namsai",
            "Cases": "259",
            "Deaths": "1",
            "Recoveries": "215",
            "Active": "43",
            "Cord_X": "27.666675",
            "Cord_Y": "95.873405"
        },
        {
            "State": "Pakke-Kessang",
            "Cases": "72",
            "Deaths": "0",
            "Recoveries": "55",
            "Active": "17",
            "Cord_X": "27.17498",
            "Cord_Y": "93.24987"
        },
        {
            "State": "Papum Pare",
            "Cases": "4434",
            "Deaths": "7",
            "Recoveries": "2649",
            "Active": "1778",
            "Cord_X": "27.284315",
            "Cord_Y": "93.61156"
        },
        {
            "State": "Shi Yomi",
            "Cases": "25",
            "Deaths": "0",
            "Recoveries": "21",
            "Active": "4",
            "Cord_X": "24.9929",
            "Cord_Y": "121.30097"
        },
        {
            "State": "Siang",
            "Cases": "50",
            "Deaths": "0",
            "Recoveries": "44",
            "Active": "6",
            "Cord_X": "28.00715",
            "Cord_Y": "95.15934"
        },
        {
            "State": "Tawang",
            "Cases": "295",
            "Deaths": "1",
            "Recoveries": "244",
            "Active": "50",
            "Cord_X": "-7.650814",
            "Cord_Y": "108.312497"
        },
        {
            "State": "Tirap",
            "Cases": "305",
            "Deaths": "0",
            "Recoveries": "240",
            "Active": "65",
            "Cord_X": "26.961625",
            "Cord_Y": "95.432609"
        },
        {
            "State": "Upper Dibang Valley",
            "Cases": "4",
            "Deaths": "0",
            "Recoveries": "4",
            "Active": "0",
            "Cord_X": "-34.65054",
            "Cord_Y": "150.60345"
        },
        {
            "State": "Upper Siang",
            "Cases": "143",
            "Deaths": "0",
            "Recoveries": "104",
            "Active": "39",
            "Cord_X": "28.720025",
            "Cord_Y": "95.07183"
        },
        {
            "State": "Upper Subansiri",
            "Cases": "293",
            "Deaths": "0",
            "Recoveries": "176",
            "Active": "117",
            "Cord_X": "28.3",
            "Cord_Y": "94"
        },
        {
            "State": "West Kameng",
            "Cases": "573",
            "Deaths": "3",
            "Recoveries": "511",
            "Active": "59",
            "Cord_X": "27.4",
            "Cord_Y": "92.35"
        },
        {
            "State": "West Siang",
            "Cases": "512",
            "Deaths": "0",
            "Recoveries": "319",
            "Active": "193",
            "Cord_X": "28.4",
            "Cord_Y": "94.55"
        },
        {
            "State": "Kamrup Metropolitan",
            "Cases": "23125",
            "Deaths": "54",
            "Recoveries": "14599",
            "Active": "23126",
            "Cord_X": "26.164464",
            "Cord_Y": "91.779683"
        },
        {
            "State": "Dibrugarh",
            "Cases": "5690",
            "Deaths": "30",
            "Recoveries": "2409",
            "Active": "1501",
            "Cord_X": "27.485983",
            "Cord_Y": "94.91542"
        },
        {
            "State": "Tinsukia",
            "Cases": "5059",
            "Deaths": "18",
            "Recoveries": "1798",
            "Active": "1551",
            "Cord_X": "50.358079",
            "Cord_Y": "2.492928"
        },
        {
            "State": "Kamrup Rural",
            "Cases": "4508",
            "Deaths": "15",
            "Recoveries": "2074",
            "Active": "820",
            "Cord_X": "39.390897",
            "Cord_Y": "-99.066067"
        },
        {
            "State": "Cachar",
            "Cases": "4469",
            "Deaths": "18",
            "Recoveries": "1498",
            "Active": "1794",
            "Cord_X": "25.083333",
            "Cord_Y": "92.916667"
        },
        {
            "State": "Jorhat",
            "Cases": "4338",
            "Deaths": "10",
            "Recoveries": "1752",
            "Active": "1576",
            "Cord_X": "26.757793",
            "Cord_Y": "94.207965"
        },
        {
            "State": "Nagaon",
            "Cases": "4175",
            "Deaths": "6",
            "Recoveries": "2506",
            "Active": "1385",
            "Cord_X": "26.347209",
            "Cord_Y": "92.685817"
        },
        {
            "State": "Dhubri",
            "Cases": "3209",
            "Deaths": "2",
            "Recoveries": "1215",
            "Active": "507",
            "Cord_X": "26.018677",
            "Cord_Y": "89.985724"
        },
        {
            "State": "Golaghat",
            "Cases": "3056",
            "Deaths": "4",
            "Recoveries": "1656",
            "Active": "729",
            "Cord_X": "26.510605",
            "Cord_Y": "93.968019"
        },
        {
            "State": "Sonitpur",
            "Cases": "2927",
            "Deaths": "3",
            "Recoveries": "1727",
            "Active": "621",
            "Cord_X": "26.765603",
            "Cord_Y": "92.996861"
        },
        {
            "State": "Darrang",
            "Cases": "2619",
            "Deaths": "8",
            "Recoveries": "1730",
            "Active": "232",
            "Cord_X": "26.75",
            "Cord_Y": "92.5"
        },
        {
            "State": "Hojai",
            "Cases": "2100",
            "Deaths": "1",
            "Recoveries": "1160",
            "Active": "184",
            "Cord_X": "26.004332",
            "Cord_Y": "92.852649"
        },
        {
            "State": "Lakhimpur",
            "Cases": "2009",
            "Deaths": "1",
            "Recoveries": "1135",
            "Active": "131",
            "Cord_X": "27.35",
            "Cord_Y": "94.25"
        },
        {
            "State": "Barpeta",
            "Cases": "1989",
            "Deaths": "2",
            "Recoveries": "1024",
            "Active": "96",
            "Cord_X": "26.325782",
            "Cord_Y": "91.007571"
        },
        {
            "State": "Hailakandi",
            "Cases": "1782",
            "Deaths": "5",
            "Recoveries": "1116",
            "Active": "269",
            "Cord_X": "24.684776",
            "Cord_Y": "92.564357"
        },
        {
            "State": "Bongaigaon",
            "Cases": "1709",
            "Deaths": "2",
            "Recoveries": "834",
            "Active": "279",
            "Cord_X": "26.480013",
            "Cord_Y": "90.558039"
        },
        {
            "State": "Karimganj",
            "Cases": "1525",
            "Deaths": "14",
            "Recoveries": "955",
            "Active": "62",
            "Cord_X": "24.864721",
            "Cord_Y": "92.368111"
        },
        {
            "State": "Nalbari",
            "Cases": "1248",
            "Deaths": "3",
            "Recoveries": "828",
            "Active": "117",
            "Cord_X": "26.443385",
            "Cord_Y": "91.436137"
        },
        {
            "State": "Kokrajhar",
            "Cases": "1107",
            "Deaths": "5",
            "Recoveries": "353",
            "Active": "51",
            "Cord_X": "26.400375",
            "Cord_Y": "90.271041"
        },
        {
            "State": "Goalpara",
            "Cases": "1058",
            "Deaths": "1",
            "Recoveries": "568",
            "Active": "90",
            "Cord_X": "26.177832",
            "Cord_Y": "90.619825"
        },
        {
            "State": "Morigaon",
            "Cases": "1038",
            "Deaths": "2",
            "Recoveries": "557",
            "Active": "79",
            "Cord_X": "26.251491",
            "Cord_Y": "92.344384"
        },
        {
            "State": "Udalguri",
            "Cases": "938",
            "Deaths": "3",
            "Recoveries": "666",
            "Active": "91",
            "Cord_X": "26.749311",
            "Cord_Y": "92.096897"
        },
        {
            "State": "Sivasagar",
            "Cases": "758",
            "Deaths": "3",
            "Recoveries": "473",
            "Active": "54",
            "Cord_X": "26.983494",
            "Cord_Y": "94.639423"
        },
        {
            "State": "Dhemaji",
            "Cases": "709",
            "Deaths": "1",
            "Recoveries": "440",
            "Active": "61",
            "Cord_X": "27.47638",
            "Cord_Y": "94.562962"
        },
        {
            "State": "East Karbi Anglong",
            "Cases": "638",
            "Deaths": "7",
            "Recoveries": "552",
            "Active": "76",
            "Cord_X": "25.8602",
            "Cord_Y": "92.589638"
        },
        {
            "State": "Biswanath",
            "Cases": "597",
            "Deaths": "0",
            "Recoveries": "397",
            "Active": "70",
            "Cord_X": "49.600556",
            "Cord_Y": "3.5825"
        },
        {
            "State": "Baksa",
            "Cases": "586",
            "Deaths": "2",
            "Recoveries": "447",
            "Active": "39",
            "Cord_X": "45.959505",
            "Cord_Y": "18.095042"
        },
        {
            "State": "Chirang",
            "Cases": "359",
            "Deaths": "0",
            "Recoveries": "219",
            "Active": "61",
            "Cord_X": "49.469674",
            "Cord_Y": "3.725913"
        },
        {
            "State": "Dima Hasao",
            "Cases": "313",
            "Deaths": "0",
            "Recoveries": "199",
            "Active": "38",
            "Cord_X": "25.398132",
            "Cord_Y": "93.082049"
        },
        {
            "State": "Majuli",
            "Cases": "248",
            "Deaths": "0",
            "Recoveries": "80",
            "Active": "85",
            "Cord_X": "-27.93049",
            "Cord_Y": "-63.90052"
        },
        {
            "State": "Charaideo",
            "Cases": "192",
            "Deaths": "1",
            "Recoveries": "105",
            "Active": "7",
            "Cord_X": "46.258919",
            "Cord_Y": "-63.148983"
        },
        {
            "State": "South Salmara- Mankachar",
            "Cases": "79",
            "Deaths": "0",
            "Recoveries": "47",
            "Active": "4",
            "Cord_X": "25.8876",
            "Cord_Y": "90.0151"
        },
        {
            "State": "West Karbi Anglong",
            "Cases": "48",
            "Deaths": "0",
            "Recoveries": "37",
            "Active": "2",
            "Cord_X": "25.8602",
            "Cord_Y": "92.589638"
        },
        {
            "State": "Araria",
            "Cases": "5260",
            "Deaths": "15",
            "Recoveries": "4821",
            "Active": "424",
            "Cord_X": "26.134646",
            "Cord_Y": "87.465406"
        },
        {
            "State": "Arwal",
            "Cases": "1845",
            "Deaths": "7",
            "Recoveries": "1683",
            "Active": "155",
            "Cord_X": "49.221858",
            "Cord_Y": "-1.079052"
        },
        {
            "State": "Aurangabad",
            "Cases": "3696",
            "Deaths": "10",
            "Recoveries": "3529",
            "Active": "157",
            "Cord_X": "24.751721",
            "Cord_Y": "84.377805"
        },
        {
            "State": "Banka",
            "Cases": "2553",
            "Deaths": "9",
            "Recoveries": "2208",
            "Active": "336",
            "Cord_X": "43.127827",
            "Cord_Y": "-1.372839"
        },
        {
            "State": "Begusarai",
            "Cases": "6369",
            "Deaths": "25",
            "Recoveries": "6123",
            "Active": "221",
            "Cord_X": "25.413861",
            "Cord_Y": "86.134886"
        },
        {
            "State": "Bhagalpur",
            "Cases": "7453",
            "Deaths": "62",
            "Recoveries": "7008",
            "Active": "383",
            "Cord_X": "25.2499",
            "Cord_Y": "86.982"
        },
        {
            "State": "Bhojpur",
            "Cases": "4155",
            "Deaths": "33",
            "Recoveries": "4017",
            "Active": "105",
            "Cord_X": "23.10013",
            "Cord_Y": "77.57029"
        },
        {
            "State": "Buxar",
            "Cases": "3452",
            "Deaths": "12",
            "Recoveries": "3361",
            "Active": "79",
            "Cord_X": "25.571871",
            "Cord_Y": "83.972402"
        },
        {
            "State": "Darbhanga",
            "Cases": "3208",
            "Deaths": "20",
            "Recoveries": "2932",
            "Active": "256",
            "Cord_X": "26.156965",
            "Cord_Y": "85.899512"
        },
        {
            "State": "East Champaran",
            "Cases": "6635",
            "Deaths": "36",
            "Recoveries": "6153",
            "Active": "446",
            "Cord_X": "26.583333",
            "Cord_Y": "84.833333"
        },
        {
            "State": "Gaya",
            "Cases": "5751",
            "Deaths": "45",
            "Recoveries": "5367",
            "Active": "339",
            "Cord_X": "41.916099",
            "Cord_Y": "1.925529"
        },
        {
            "State": "Gopalganj",
            "Cases": "4238",
            "Deaths": "2",
            "Recoveries": "3828",
            "Active": "408",
            "Cord_X": "26.464542",
            "Cord_Y": "84.44337"
        },
        {
            "State": "Jamui",
            "Cases": "2362",
            "Deaths": "6",
            "Recoveries": "2067",
            "Active": "289",
            "Cord_X": "58.301084",
            "Cord_Y": "-134.424524"
        },
        {
            "State": "Jehanabad",
            "Cases": "2987",
            "Deaths": "8",
            "Recoveries": "2768",
            "Active": "211",
            "Cord_X": "25.211338",
            "Cord_Y": "84.98737"
        },
        {
            "State": "Kaimur",
            "Cases": "1659",
            "Deaths": "9",
            "Recoveries": "1594",
            "Active": "56",
            "Cord_X": "24.970853",
            "Cord_Y": "83.575653"
        },
        {
            "State": "Katihar",
            "Cases": "5684",
            "Deaths": "11",
            "Recoveries": "5434",
            "Active": "239",
            "Cord_X": "25.543382",
            "Cord_Y": "87.569042"
        },
        {
            "State": "Khagaria",
            "Cases": "2673",
            "Deaths": "10",
            "Recoveries": "2586",
            "Active": "77",
            "Cord_X": "25.511246",
            "Cord_Y": "86.475656"
        },
        {
            "State": "Kishanganj",
            "Cases": "3111",
            "Deaths": "10",
            "Recoveries": "2835",
            "Active": "266",
            "Cord_X": "26.101419",
            "Cord_Y": "87.950779"
        },
        {
            "State": "Lakhisarai",
            "Cases": "2722",
            "Deaths": "8",
            "Recoveries": "2525",
            "Active": "189",
            "Cord_X": "25.180721",
            "Cord_Y": "86.093654"
        },
        {
            "State": "Madhepura",
            "Cases": "3345",
            "Deaths": "9",
            "Recoveries": "2924",
            "Active": "412",
            "Cord_X": "25.917414",
            "Cord_Y": "86.791591"
        },
        {
            "State": "Madhubani",
            "Cases": "6227",
            "Deaths": "17",
            "Recoveries": "5820",
            "Active": "390",
            "Cord_X": "26.357794",
            "Cord_Y": "86.069304"
        },
        {
            "State": "Munger",
            "Cases": "3043",
            "Deaths": "36",
            "Recoveries": "2740",
            "Active": "267",
            "Cord_X": "25.377352",
            "Cord_Y": "86.473104"
        },
        {
            "State": "Muzaffarpur",
            "Cases": "8346",
            "Deaths": "32",
            "Recoveries": "7752",
            "Active": "562",
            "Cord_X": "26.11829",
            "Cord_Y": "85.385789"
        },
        {
            "State": "Nalanda",
            "Cases": "6074",
            "Deaths": "39",
            "Recoveries": "5619",
            "Active": "416",
            "Cord_X": "25.25",
            "Cord_Y": "85.583333"
        },
        {
            "State": "Nawada",
            "Cases": "2761",
            "Deaths": "16",
            "Recoveries": "2471",
            "Active": "274",
            "Cord_X": "24.893152",
            "Cord_Y": "85.54516"
        },
        {
            "State": "Patna",
            "Cases": "28143",
            "Deaths": "213",
            "Recoveries": "25868",
            "Active": "2062",
            "Cord_X": "25.609575",
            "Cord_Y": "85.123819"
        },
        {
            "State": "Purnia",
            "Cases": "6537",
            "Deaths": "9",
            "Recoveries": "5798",
            "Active": "730",
            "Cord_X": "25.778519",
            "Cord_Y": "87.478401"
        },
        {
            "State": "Rohtas",
            "Cases": "5567",
            "Deaths": "36",
            "Recoveries": "5225",
            "Active": "306",
            "Cord_X": "24.634271",
            "Cord_Y": "83.96395"
        },
        {
            "State": "Saharsa",
            "Cases": "4895",
            "Deaths": "7",
            "Recoveries": "4546",
            "Active": "342",
            "Cord_X": "25.875896",
            "Cord_Y": "86.59267"
        },
        {
            "State": "Samastipur",
            "Cases": "4197",
            "Deaths": "29",
            "Recoveries": "3904",
            "Active": "264",
            "Cord_X": "25.859685",
            "Cord_Y": "85.783904"
        },
        {
            "State": "Saran",
            "Cases": "5495",
            "Deaths": "32",
            "Recoveries": "5194",
            "Active": "269",
            "Cord_X": "47.949404",
            "Cord_Y": "1.876421"
        },
        {
            "State": "Sheikhpura",
            "Cases": "2362",
            "Deaths": "6",
            "Recoveries": "2174",
            "Active": "182",
            "Cord_X": "25.1339",
            "Cord_Y": "85.8554"
        },
        {
            "State": "Sheohar",
            "Cases": "1072",
            "Deaths": "1",
            "Recoveries": "994",
            "Active": "77",
            "Cord_X": "26.46444",
            "Cord_Y": "85.1722"
        },
        {
            "State": "Sitamarhi",
            "Cases": "3394",
            "Deaths": "11",
            "Recoveries": "3308",
            "Active": "75",
            "Cord_X": "26.596404",
            "Cord_Y": "85.493143"
        },
        {
            "State": "Siwan",
            "Cases": "3681",
            "Deaths": "19",
            "Recoveries": "3431",
            "Active": "231",
            "Cord_X": "26.166667",
            "Cord_Y": "84.5"
        },
        {
            "State": "Supaul",
            "Cases": "4228",
            "Deaths": "9",
            "Recoveries": "3751",
            "Active": "468",
            "Cord_X": "25.94633",
            "Cord_Y": "86.24736"
        },
        {
            "State": "Vaishali",
            "Cases": "4255",
            "Deaths": "31",
            "Recoveries": "3962",
            "Active": "262",
            "Cord_X": "25.93782",
            "Cord_Y": "85.1459"
        },
        {
            "State": "West Champaran",
            "Cases": "4841",
            "Deaths": "16",
            "Recoveries": "4547",
            "Active": "278",
            "Cord_X": "43.192418",
            "Cord_Y": "-79.223167"
        },
        {
            "State": "Chandigarh",
            "Cases": "12057",
            "Deaths": "164",
            "Recoveries": "10009",
            "Active": "1884",
            "Cord_X": "30.735154",
            "Cord_Y": "76.770503"
        },
        {
            "State": "Balod",
            "Cases": "2457",
            "Deaths": "4",
            "Recoveries": "1692",
            "Active": "761",
            "Cord_X": "20.727201",
            "Cord_Y": "81.20542"
        },
        {
            "State": "Baloda Bazar",
            "Cases": "3136",
            "Deaths": "20",
            "Recoveries": "2634",
            "Active": "482",
            "Cord_X": "48.428911",
            "Cord_Y": "-3.330215"
        },
        {
            "State": "Balrampur",
            "Cases": "1014",
            "Deaths": "3",
            "Recoveries": "758",
            "Active": "253",
            "Cord_X": "27.429513",
            "Cord_Y": "82.18546"
        },
        {
            "State": "Bemetara",
            "Cases": "1421",
            "Deaths": "18",
            "Recoveries": "1133",
            "Active": "270",
            "Cord_X": "21.69763",
            "Cord_Y": "81.50128"
        },
        {
            "State": "Bastar",
            "Cases": "3351",
            "Deaths": "19",
            "Recoveries": "2018",
            "Active": "1314",
            "Cord_X": "43.31205",
            "Cord_Y": "-0.5582"
        },
        {
            "State": "Bijapur",
            "Cases": "1754",
            "Deaths": "6",
            "Recoveries": "1490",
            "Active": "258",
            "Cord_X": "16.826925",
            "Cord_Y": "75.720105"
        },
        {
            "State": "Bilaspur",
            "Cases": "7627",
            "Deaths": "81",
            "Recoveries": "6688",
            "Active": "858",
            "Cord_X": "22.079102",
            "Cord_Y": "82.14807"
        },
        {
            "State": "Dantewada",
            "Cases": "2455",
            "Deaths": "8",
            "Recoveries": "1540",
            "Active": "907",
            "Cord_X": "18.887202",
            "Cord_Y": "81.350029"
        },
        {
            "State": "Dhamtari",
            "Cases": "2552",
            "Deaths": "11",
            "Recoveries": "1752",
            "Active": "789",
            "Cord_X": "20.70839",
            "Cord_Y": "81.548525"
        },
        {
            "State": "Durg",
            "Cases": "11612",
            "Deaths": "111",
            "Recoveries": "8846",
            "Active": "2655",
            "Cord_X": "21.189729",
            "Cord_Y": "81.274647"
        },
        {
            "State": "Gariaband",
            "Cases": "1497",
            "Deaths": "16",
            "Recoveries": "1211",
            "Active": "270",
            "Cord_X": "49.752443",
            "Cord_Y": "0.565087"
        },
        {
            "State": "Gaurella-Pendra-Marwahi",
            "Cases": "321",
            "Deaths": "1",
            "Recoveries": "268",
            "Active": "52",
            "Cord_X": "39.390897",
            "Cord_Y": "-99.066067"
        },
        {
            "State": "Janjgir–Champa",
            "Cases": "4887",
            "Deaths": "25",
            "Recoveries": "3705",
            "Active": "1157",
            "Cord_X": "22.0342",
            "Cord_Y": "82.6672"
        },
        {
            "State": "Jashpur",
            "Cases": "1156",
            "Deaths": "3",
            "Recoveries": "845",
            "Active": "308",
            "Cord_X": "22.8773",
            "Cord_Y": "84.1372"
        },
        {
            "State": "Kabirdham",
            "Cases": "2089",
            "Deaths": "7",
            "Recoveries": "1680",
            "Active": "402",
            "Cord_X": "39.390897",
            "Cord_Y": "-99.066067"
        },
        {
            "State": "Kondagaon",
            "Cases": "1340",
            "Deaths": "9",
            "Recoveries": "1047",
            "Active": "284",
            "Cord_X": "19.588577",
            "Cord_Y": "81.662874"
        },
        {
            "State": "Korba",
            "Cases": "3150",
            "Deaths": "7",
            "Recoveries": "2018",
            "Active": "1125",
            "Cord_X": "22.354755",
            "Cord_Y": "82.711084"
        },
        {
            "State": "Koriya",
            "Cases": "1475",
            "Deaths": "11",
            "Recoveries": "1127",
            "Active": "337",
            "Cord_X": "23.1801",
            "Cord_Y": "82.37453"
        },
        {
            "State": "Mahasamund",
            "Cases": "2494",
            "Deaths": "24",
            "Recoveries": "1941",
            "Active": "529",
            "Cord_X": "21.109006",
            "Cord_Y": "82.100616"
        },
        {
            "State": "Mungeli",
            "Cases": "1591",
            "Deaths": "3",
            "Recoveries": "1023",
            "Active": "565",
            "Cord_X": "49.6687",
            "Cord_Y": "3.49268"
        },
        {
            "State": "Narayanpur",
            "Cases": "1342",
            "Deaths": "0",
            "Recoveries": "1048",
            "Active": "294",
            "Cord_X": "49.45385",
            "Cord_Y": "11.077324"
        },
        {
            "State": "Raigarh",
            "Cases": "6887",
            "Deaths": "58",
            "Recoveries": "5077",
            "Active": "1752",
            "Cord_X": "21.900907",
            "Cord_Y": "83.393851"
        },
        {
            "State": "Raipur",
            "Cases": "34187",
            "Deaths": "434",
            "Recoveries": "22799",
            "Active": "10954",
            "Cord_X": "21.237947",
            "Cord_Y": "81.633683"
        },
        {
            "State": "Rajnandgaon",
            "Cases": "7868",
            "Deaths": "40",
            "Recoveries": "6358",
            "Active": "1470",
            "Cord_X": "21.096491",
            "Cord_Y": "81.030187"
        },
        {
            "State": "Sukma",
            "Cases": "1837",
            "Deaths": "4",
            "Recoveries": "1421",
            "Active": "412",
            "Cord_X": "18.393101",
            "Cord_Y": "81.657013"
        },
        {
            "State": "Surajpur",
            "Cases": "1669",
            "Deaths": "10",
            "Recoveries": "1293",
            "Active": "366",
            "Cord_X": "43.851498",
            "Cord_Y": "18.388613"
        },
        {
            "State": "Surguja",
            "Cases": "2662",
            "Deaths": "22",
            "Recoveries": "1840",
            "Active": "800",
            "Cord_X": "23.369003",
            "Cord_Y": "83.328758"
        },
        {
            "State": "Kanker",
            "Cases": "2160",
            "Deaths": "11",
            "Recoveries": "1307",
            "Active": "842",
            "Cord_X": "20.269275",
            "Cord_Y": "81.493211"
        },
        {
            "State": "Delhi",
            "Cases": "282752",
            "Deaths": "5401",
            "Recoveries": "250613",
            "Active": "26738",
            "Cord_X": "28.657291",
            "Cord_Y": "77.22726"
        },
        {
            "State": "Goa",
            "Cases": "33942",
            "Deaths": "440",
            "Recoveries": "28525",
            "Active": "4977",
            "Cord_X": "15.300454",
            "Cord_Y": "74.085513"
        },
        {
            "State": "Ahmedabad",
            "Cases": "37041",
            "Deaths": "1815",
            "Recoveries": "31104",
            "Active": "4122",
            "Cord_X": "23.021624",
            "Cord_Y": "72.579707"
        },
        {
            "State": "Amreli",
            "Cases": "2150",
            "Deaths": "24",
            "Recoveries": "1694",
            "Active": "432",
            "Cord_X": "21.596805",
            "Cord_Y": "71.208744"
        },
        {
            "State": "Anand",
            "Cases": "1100",
            "Deaths": "16",
            "Recoveries": "1049",
            "Active": "35",
            "Cord_X": "22.5585",
            "Cord_Y": "72.962563"
        },
        {
            "State": "Aravalli",
            "Cases": "601",
            "Deaths": "24",
            "Recoveries": "398",
            "Active": "179",
            "Cord_X": "-38.10094",
            "Cord_Y": "145.35081"
        },
        {
            "State": "Banaskantha",
            "Cases": "2089",
            "Deaths": "21",
            "Recoveries": "1991",
            "Active": "77",
            "Cord_X": "42.098702",
            "Cord_Y": "-75.912543"
        },
        {
            "State": "Bharuch",
            "Cases": "2267",
            "Deaths": "15",
            "Recoveries": "2007",
            "Active": "245",
            "Cord_X": "21.708043",
            "Cord_Y": "72.995694"
        },
        {
            "State": "Bhavnagar",
            "Cases": "4213",
            "Deaths": "65",
            "Recoveries": "3755",
            "Active": "393",
            "Cord_X": "21.771494",
            "Cord_Y": "72.142883"
        },
        {
            "State": "Botad",
            "Cases": "745",
            "Deaths": "5",
            "Recoveries": "617",
            "Active": "123",
            "Cord_X": "22.1686",
            "Cord_Y": "71.6685"
        },
        {
            "State": "Chhota Udaipur",
            "Cases": "502",
            "Deaths": "2",
            "Recoveries": "422",
            "Active": "78",
            "Cord_X": "22.304865",
            "Cord_Y": "74.012611"
        },
        {
            "State": "Dahod",
            "Cases": "1657",
            "Deaths": "6",
            "Recoveries": "1375",
            "Active": "276",
            "Cord_X": "22.79511",
            "Cord_Y": "73.7546"
        },
        {
            "State": "Dang",
            "Cases": "106",
            "Deaths": "0",
            "Recoveries": "82",
            "Active": "24",
            "Cord_X": "20.75",
            "Cord_Y": "73.75"
        },
        {
            "State": "Devbhoomi Dwarka",
            "Cases": "571",
            "Deaths": "5",
            "Recoveries": "457",
            "Active": "109",
            "Cord_X": "22.2506",
            "Cord_Y": "68.9802"
        },
        {
            "State": "Gandhinagar",
            "Cases": "3703",
            "Deaths": "78",
            "Recoveries": "3008",
            "Active": "617",
            "Cord_X": "23.223288",
            "Cord_Y": "72.649227"
        },
        {
            "State": "Gir Somnath",
            "Cases": "1418",
            "Deaths": "20",
            "Recoveries": "1258",
            "Active": "140",
            "Cord_X": "39.390897",
            "Cord_Y": "-99.066067"
        },
        {
            "State": "Jamnagar",
            "Cases": "6181",
            "Deaths": "34",
            "Recoveries": "5723",
            "Active": "424",
            "Cord_X": "22.473242",
            "Cord_Y": "70.055224"
        },
        {
            "State": "Junagadh",
            "Cases": "2820",
            "Deaths": "33",
            "Recoveries": "2424",
            "Active": "363",
            "Cord_X": "21.517411",
            "Cord_Y": "70.464276"
        },
        {
            "State": "Kutch",
            "Cases": "2148",
            "Deaths": "33",
            "Recoveries": "1518",
            "Active": "597",
            "Cord_X": "37.910599",
            "Cord_Y": "-103.868896"
        },
        {
            "State": "Kheda",
            "Cases": "1290",
            "Deaths": "15",
            "Recoveries": "1199",
            "Active": "76",
            "Cord_X": "41.597934",
            "Cord_Y": "41.939846"
        },
        {
            "State": "Mahisagar",
            "Cases": "1013",
            "Deaths": "4",
            "Recoveries": "891",
            "Active": "118",
            "Cord_X": "44.065587",
            "Cord_Y": "-77.415762"
        },
        {
            "State": "Mehsana",
            "Cases": "2753",
            "Deaths": "29",
            "Recoveries": "2035",
            "Active": "689",
            "Cord_X": "32.836038",
            "Cord_Y": "-83.631709"
        },
        {
            "State": "Morbi",
            "Cases": "1681",
            "Deaths": "16",
            "Recoveries": "1411",
            "Active": "254",
            "Cord_X": "49.29607",
            "Cord_Y": "3.947426"
        },
        {
            "State": "Narmada",
            "Cases": "933",
            "Deaths": "0",
            "Recoveries": "869",
            "Active": "64",
            "Cord_X": "-8.57168",
            "Cord_Y": "116.19657"
        },
        {
            "State": "Navsari",
            "Cases": "1185",
            "Deaths": "7",
            "Recoveries": "1111",
            "Active": "67",
            "Cord_X": "20.952407",
            "Cord_Y": "72.932383"
        },
        {
            "State": "Panchmahal",
            "Cases": "2336",
            "Deaths": "19",
            "Recoveries": "2011",
            "Active": "306",
            "Cord_X": "50.063455",
            "Cord_Y": "-110.651764"
        },
        {
            "State": "Patan",
            "Cases": "1826",
            "Deaths": "41",
            "Recoveries": "1591",
            "Active": "194",
            "Cord_X": "27.672904",
            "Cord_Y": "85.326541"
        },
        {
            "State": "Porbandar",
            "Cases": "469",
            "Deaths": "4",
            "Recoveries": "415",
            "Active": "50",
            "Cord_X": "21.6409",
            "Cord_Y": "69.611"
        },
        {
            "State": "Rajkot",
            "Cases": "9406",
            "Deaths": "140",
            "Recoveries": "7904",
            "Active": "1362",
            "Cord_X": "22.304587",
            "Cord_Y": "70.802098"
        },
        {
            "State": "Sabarkantha",
            "Cases": "1100",
            "Deaths": "11",
            "Recoveries": "837",
            "Active": "252",
            "Cord_X": "24.029489",
            "Cord_Y": "73.045988"
        },
        {
            "State": "Surat",
            "Cases": "29457",
            "Deaths": "769",
            "Recoveries": "26051",
            "Active": "2637",
            "Cord_X": "21.186461",
            "Cord_Y": "72.808128"
        },
        {
            "State": "Surendranagar",
            "Cases": "1795",
            "Deaths": "10",
            "Recoveries": "1424",
            "Active": "361",
            "Cord_X": "22.72317",
            "Cord_Y": "71.648352"
        },
        {
            "State": "Tapi",
            "Cases": "632",
            "Deaths": "4",
            "Recoveries": "585",
            "Active": "43",
            "Cord_X": "25.037638",
            "Cord_Y": "121.564459"
        },
        {
            "State": "Vadodara",
            "Cases": "12220",
            "Deaths": "186",
            "Recoveries": "10102",
            "Active": "1932",
            "Cord_X": "22.297076",
            "Cord_Y": "73.195737"
        },
        {
            "State": "Valsad",
            "Cases": "1175",
            "Deaths": "9",
            "Recoveries": "1115",
            "Active": "51",
            "Cord_X": "20.606777",
            "Cord_Y": "72.927288"
        },
        {
            "State": "Ambala",
            "Cases": "7969",
            "Deaths": "92",
            "Recoveries": "7226",
            "Active": "651",
            "Cord_X": "30.384367",
            "Cord_Y": "76.770421"
        },
        {
            "State": "Bhiwani",
            "Cases": "2794",
            "Deaths": "36",
            "Recoveries": "2534",
            "Active": "224",
            "Cord_X": "28.79317",
            "Cord_Y": "76.139128"
        },
        {
            "State": "Charkhi Dadri",
            "Cases": "625",
            "Deaths": "2",
            "Recoveries": "415",
            "Active": "208",
            "Cord_X": "28.59238",
            "Cord_Y": "76.267905"
        },
        {
            "State": "Faridabad",
            "Cases": "19982",
            "Deaths": "221",
            "Recoveries": "18638",
            "Active": "1123",
            "Cord_X": "28.402837",
            "Cord_Y": "77.308563"
        },
        {
            "State": "Fatehabad",
            "Cases": "2368",
            "Deaths": "38",
            "Recoveries": "1979",
            "Active": "351",
            "Cord_X": "29.510431",
            "Cord_Y": "75.453528"
        },
        {
            "State": "Gurugram",
            "Cases": "20921",
            "Deaths": "174",
            "Recoveries": "18377",
            "Active": "2370",
            "Cord_X": "49.889444",
            "Cord_Y": "3.245278"
        },
        {
            "State": "Hisar",
            "Cases": "6351",
            "Deaths": "64",
            "Recoveries": "5075",
            "Active": "1212",
            "Cord_X": "29.156269",
            "Cord_Y": "75.72923"
        },
        {
            "State": "Jhajjar",
            "Cases": "2524",
            "Deaths": "25",
            "Recoveries": "2262",
            "Active": "237",
            "Cord_X": "28.606683",
            "Cord_Y": "76.658076"
        },
        {
            "State": "Jind",
            "Cases": "2059",
            "Deaths": "27",
            "Recoveries": "1565",
            "Active": "467",
            "Cord_X": "29.314043",
            "Cord_Y": "76.317949"
        },
        {
            "State": "Kaithal",
            "Cases": "2470",
            "Deaths": "40",
            "Recoveries": "2115",
            "Active": "315",
            "Cord_X": "29.799659",
            "Cord_Y": "76.39899"
        },
        {
            "State": "Karnal",
            "Cases": "7375",
            "Deaths": "107",
            "Recoveries": "6605",
            "Active": "663",
            "Cord_X": "29.680327",
            "Cord_Y": "76.989625"
        },
        {
            "State": "Kurukshetra",
            "Cases": "5684",
            "Deaths": "91",
            "Recoveries": "5093",
            "Active": "500",
            "Cord_X": "30",
            "Cord_Y": "76.75"
        },
        {
            "State": "Mahendragarh",
            "Cases": "3467",
            "Deaths": "7",
            "Recoveries": "2988",
            "Active": "472",
            "Cord_X": "28.265912",
            "Cord_Y": "76.151476"
        },
        {
            "State": "Nuh",
            "Cases": "1123",
            "Deaths": "23",
            "Recoveries": "1032",
            "Active": "68",
            "Cord_X": "28.103337",
            "Cord_Y": "77.004799"
        },
        {
            "State": "Palwal",
            "Cases": "2633",
            "Deaths": "16",
            "Recoveries": "2499",
            "Active": "118",
            "Cord_X": "28.140574",
            "Cord_Y": "77.32598"
        },
        {
            "State": "Panchkula",
            "Cases": "6074",
            "Deaths": "86",
            "Recoveries": "5223",
            "Active": "765",
            "Cord_X": "30.69754",
            "Cord_Y": "76.855107"
        },
        {
            "State": "Panipat",
            "Cases": "7357",
            "Deaths": "81",
            "Recoveries": "6599",
            "Active": "677",
            "Cord_X": "29.391275",
            "Cord_Y": "76.977168"
        },
        {
            "State": "Rewari",
            "Cases": "5797",
            "Deaths": "29",
            "Recoveries": "5180",
            "Active": "588",
            "Cord_X": "28.195647",
            "Cord_Y": "76.616518"
        },
        {
            "State": "Rohtak",
            "Cases": "5937",
            "Deaths": "63",
            "Recoveries": "5127",
            "Active": "747",
            "Cord_X": "28.90109",
            "Cord_Y": "76.580194"
        },
        {
            "State": "Sirsa",
            "Cases": "3807",
            "Deaths": "63",
            "Recoveries": "3094",
            "Active": "650",
            "Cord_X": "29.537285",
            "Cord_Y": "75.037765"
        },
        {
            "State": "Sonipat",
            "Cases": "8355",
            "Deaths": "44",
            "Recoveries": "7734",
            "Active": "577",
            "Cord_X": "29.003314",
            "Cord_Y": "77.016732"
        },
        {
            "State": "Yamunanagar",
            "Cases": "4240",
            "Deaths": "73",
            "Recoveries": "3678",
            "Active": "489",
            "Cord_X": "30.123135",
            "Cord_Y": "77.286329"
        },
        {
            "State": "Bilaspur",
            "Cases": "838",
            "Deaths": "1",
            "Recoveries": "595",
            "Active": "242",
            "Cord_X": "22.079102",
            "Cord_Y": "82.14807"
        },
        {
            "State": "Chamba",
            "Cases": "851",
            "Deaths": "11",
            "Recoveries": "741",
            "Active": "99",
            "Cord_X": "32.556504",
            "Cord_Y": "76.124997"
        },
        {
            "State": "Hamirpur",
            "Cases": "923",
            "Deaths": "7",
            "Recoveries": "756",
            "Active": "160",
            "Cord_X": "25.75",
            "Cord_Y": "80"
        },
        {
            "State": "Kangra",
            "Cases": "2313",
            "Deaths": "46",
            "Recoveries": "1818",
            "Active": "449",
            "Cord_X": "32.166667",
            "Cord_Y": "76.25"
        },
        {
            "State": "Kinnaur",
            "Cases": "196",
            "Deaths": "2",
            "Recoveries": "139",
            "Active": "55",
            "Cord_X": "31.586346",
            "Cord_Y": "78.396844"
        },
        {
            "State": "Kullu",
            "Cases": "670",
            "Deaths": "8",
            "Recoveries": "428",
            "Active": "234",
            "Cord_X": "31.957897",
            "Cord_Y": "77.108923"
        },
        {
            "State": "Lahaul and Spiti",
            "Cases": "166",
            "Deaths": "0",
            "Recoveries": "100",
            "Active": "66",
            "Cord_X": "32.27556",
            "Cord_Y": "78.00655"
        },
        {
            "State": "Mandi",
            "Cases": "1748",
            "Deaths": "25",
            "Recoveries": "1196",
            "Active": "527",
            "Cord_X": "31.70845",
            "Cord_Y": "76.929378"
        },
        {
            "State": "Shimla",
            "Cases": "1322",
            "Deaths": "35",
            "Recoveries": "831",
            "Active": "456",
            "Cord_X": "31.104153",
            "Cord_Y": "77.170973"
        },
        {
            "State": "Sirmaur",
            "Cases": "1839",
            "Deaths": "14",
            "Recoveries": "1584",
            "Active": "241",
            "Cord_X": "24.835182",
            "Cord_Y": "81.364318"
        },
        {
            "State": "Solan",
            "Cases": "3047",
            "Deaths": "29",
            "Recoveries": "2358",
            "Active": "660",
            "Cord_X": "42.943168",
            "Cord_Y": "1.695061"
        },
        {
            "State": "Una",
            "Cases": "1306",
            "Deaths": "12",
            "Recoveries": "1042",
            "Active": "252",
            "Cord_X": "40.223109",
            "Cord_Y": "-1.977556"
        },
        {
            "State": "Anantnag",
            "Cases": "3535",
            "Deaths": "66",
            "Recoveries": "3043",
            "Active": "426",
            "Cord_X": "33.736636",
            "Cord_Y": "75.145739"
        },
        {
            "State": "Bandipora",
            "Cases": "3434",
            "Deaths": "37",
            "Recoveries": "2969",
            "Active": "428",
            "Cord_X": "49.527551",
            "Cord_Y": "-1.780226"
        },
        {
            "State": "Baramulla",
            "Cases": "4427",
            "Deaths": "124",
            "Recoveries": "2971",
            "Active": "1332",
            "Cord_X": "34.20869",
            "Cord_Y": "74.343498"
        },
        {
            "State": "Budgam",
            "Cases": "4925",
            "Deaths": "84",
            "Recoveries": "3970",
            "Active": "871",
            "Cord_X": "34.015472",
            "Cord_Y": "74.722009"
        },
        {
            "State": "Doda",
            "Cases": "2233",
            "Deaths": "31",
            "Recoveries": "1233",
            "Active": "969",
            "Cord_X": "33.144911",
            "Cord_Y": "75.547397"
        },
        {
            "State": "Ganderbal",
            "Cases": "2918",
            "Deaths": "29",
            "Recoveries": "2563",
            "Active": "326",
            "Cord_X": "50.31869",
            "Cord_Y": "2.41104"
        },
        {
            "State": "Jammu",
            "Cases": "13505",
            "Deaths": "192",
            "Recoveries": "9923",
            "Active": "3390",
            "Cord_X": "32.718561",
            "Cord_Y": "74.858092"
        },
        {
            "State": "Kathua",
            "Cases": "2079",
            "Deaths": "22",
            "Recoveries": "1563",
            "Active": "494",
            "Cord_X": "32.583333",
            "Cord_Y": "75.5"
        },
        {
            "State": "Kishtwar",
            "Cases": "1290",
            "Deaths": "7",
            "Recoveries": "689",
            "Active": "594",
            "Cord_X": "57.76797",
            "Cord_Y": "40.926846"
        },
        {
            "State": "Kulgam",
            "Cases": "2279",
            "Deaths": "43",
            "Recoveries": "2122",
            "Active": "114",
            "Cord_X": "33.648004",
            "Cord_Y": "75.005783"
        },
        {
            "State": "Kupwara",
            "Cases": "3640",
            "Deaths": "67",
            "Recoveries": "2832",
            "Active": "741",
            "Cord_X": "34.526543",
            "Cord_Y": "74.255923"
        },
        {
            "State": "Pulwama",
            "Cases": "3967",
            "Deaths": "69",
            "Recoveries": "3488",
            "Active": "410",
            "Cord_X": "33.876029",
            "Cord_Y": "74.899738"
        },
        {
            "State": "Punch",
            "Cases": "1788",
            "Deaths": "16",
            "Recoveries": "819",
            "Active": "953",
            "Cord_X": "33.766704",
            "Cord_Y": "74.095996"
        },
        {
            "State": "Rajouri",
            "Cases": "2692",
            "Deaths": "32",
            "Recoveries": "1466",
            "Active": "1194",
            "Cord_X": "33.377138",
            "Cord_Y": "74.313571"
        },
        {
            "State": "Ramban",
            "Cases": "1357",
            "Deaths": "10",
            "Recoveries": "1100",
            "Active": "247",
            "Cord_X": "33.240768",
            "Cord_Y": "75.238621"
        },
        {
            "State": "Reasi",
            "Cases": "964",
            "Deaths": "6",
            "Recoveries": "559",
            "Active": "399",
            "Cord_X": "33.079177",
            "Cord_Y": "74.836295"
        },
        {
            "State": "Samba",
            "Cases": "1782",
            "Deaths": "21",
            "Recoveries": "1000",
            "Active": "761",
            "Cord_X": "-8.836667",
            "Cord_Y": "13.225833"
        },
        {
            "State": "Shopian",
            "Cases": "2029",
            "Deaths": "32",
            "Recoveries": "1840",
            "Active": "157",
            "Cord_X": "33.720217",
            "Cord_Y": "74.830472"
        },
        {
            "State": "Srinagar",
            "Cases": "15046",
            "Deaths": "292",
            "Recoveries": "12696",
            "Active": "2058",
            "Cord_X": "34.074744",
            "Cord_Y": "74.820444"
        },
        {
            "State": "Udhampur",
            "Cases": "2273",
            "Deaths": "18",
            "Recoveries": "1706",
            "Active": "549",
            "Cord_X": "32.921973",
            "Cord_Y": "75.133148"
        },
        {
            "State": "Bokaro",
            "Cases": "4087",
            "Deaths": "31",
            "Recoveries": "3539",
            "Active": "517",
            "Cord_X": "23.652968",
            "Cord_Y": "86.135019"
        },
        {
            "State": "Chatra",
            "Cases": "1196",
            "Deaths": "7",
            "Recoveries": "989",
            "Active": "200",
            "Cord_X": "24.205666",
            "Cord_Y": "84.870774"
        },
        {
            "State": "Deoghar",
            "Cases": "2553",
            "Deaths": "16",
            "Recoveries": "2308",
            "Active": "229",
            "Cord_X": "24.491271",
            "Cord_Y": "86.698147"
        },
        {
            "State": "Dhanbad",
            "Cases": "5178",
            "Deaths": "63",
            "Recoveries": "4493",
            "Active": "622",
            "Cord_X": "23.795281",
            "Cord_Y": "86.430964"
        },
        {
            "State": "Dumka",
            "Cases": "1082",
            "Deaths": "7",
            "Recoveries": "833",
            "Active": "242",
            "Cord_X": "24.26965",
            "Cord_Y": "87.249771"
        },
        {
            "State": "East Singhbhum",
            "Cases": "14431",
            "Deaths": "301",
            "Recoveries": "11808",
            "Active": "2322",
            "Cord_X": "39.552138",
            "Cord_Y": "-74.805632"
        },
        {
            "State": "Garhwa",
            "Cases": "2142",
            "Deaths": "9",
            "Recoveries": "1985",
            "Active": "148",
            "Cord_X": "41.601967",
            "Cord_Y": "-87.349684"
        },
        {
            "State": "Giridih",
            "Cases": "3089",
            "Deaths": "10",
            "Recoveries": "2921",
            "Active": "158",
            "Cord_X": "24.1782",
            "Cord_Y": "86.3139"
        },
        {
            "State": "Godda",
            "Cases": "1624",
            "Deaths": "8",
            "Recoveries": "1468",
            "Active": "148",
            "Cord_X": "24.828618",
            "Cord_Y": "87.210963"
        },
        {
            "State": "Gumla",
            "Cases": "1643",
            "Deaths": "2",
            "Recoveries": "1457",
            "Active": "184",
            "Cord_X": "23.042608",
            "Cord_Y": "84.542229"
        },
        {
            "State": "Hazaribagh",
            "Cases": "3563",
            "Deaths": "24",
            "Recoveries": "2978",
            "Active": "561",
            "Cord_X": "23.991352",
            "Cord_Y": "85.362784"
        },
        {
            "State": "Jamtara",
            "Cases": "801",
            "Deaths": "2",
            "Recoveries": "693",
            "Active": "106",
            "Cord_X": "23.952",
            "Cord_Y": "86.8188"
        },
        {
            "State": "Khunti",
            "Cases": "1530",
            "Deaths": "4",
            "Recoveries": "1195",
            "Active": "331",
            "Cord_X": "23.077096",
            "Cord_Y": "85.280046"
        },
        {
            "State": "Koderma",
            "Cases": "3000",
            "Deaths": "23",
            "Recoveries": "2649",
            "Active": "328",
            "Cord_X": "24.46638",
            "Cord_Y": "85.593731"
        },
        {
            "State": "Latehar",
            "Cases": "1491",
            "Deaths": "2",
            "Recoveries": "1260",
            "Active": "229",
            "Cord_X": "49.257778",
            "Cord_Y": "3.246667"
        },
        {
            "State": "Lohardaga",
            "Cases": "1324",
            "Deaths": "7",
            "Recoveries": "929",
            "Active": "388",
            "Cord_X": "23.431301",
            "Cord_Y": "84.678393"
        },
        {
            "State": "Pakur",
            "Cases": "754",
            "Deaths": "2",
            "Recoveries": "619",
            "Active": "133",
            "Cord_X": "24.282",
            "Cord_Y": "87.26711"
        },
        {
            "State": "Palamu",
            "Cases": "2738",
            "Deaths": "10",
            "Recoveries": "2555",
            "Active": "173",
            "Cord_X": "23.916667",
            "Cord_Y": "84.083333"
        },
        {
            "State": "Ramgarh",
            "Cases": "3510",
            "Deaths": "21",
            "Recoveries": "3307",
            "Active": "182",
            "Cord_X": "27.584973",
            "Cord_Y": "76.813086"
        },
        {
            "State": "Ranchi",
            "Cases": "19363",
            "Deaths": "119",
            "Recoveries": "15911",
            "Active": "3333",
            "Cord_X": "23.366464",
            "Cord_Y": "85.320503"
        },
        {
            "State": "Sahibganj",
            "Cases": "1308",
            "Deaths": "9",
            "Recoveries": "1244",
            "Active": "55",
            "Cord_X": "25.243172",
            "Cord_Y": "87.63376"
        },
        {
            "State": "Seraikela Kharsawan",
            "Cases": "2958",
            "Deaths": "8",
            "Recoveries": "2559",
            "Active": "391",
            "Cord_X": "22.7021",
            "Cord_Y": "85.9307"
        },
        {
            "State": "Simdega",
            "Cases": "1644",
            "Deaths": "4",
            "Recoveries": "1472",
            "Active": "168",
            "Cord_X": "32.71576",
            "Cord_Y": "-117.163817"
        },
        {
            "State": "West Singhbhum",
            "Cases": "3655",
            "Deaths": "32",
            "Recoveries": "3289",
            "Active": "334",
            "Cord_X": "49.955698",
            "Cord_Y": "-97.203356"
        },
        {
            "State": "Bagalkote",
            "Cases": "10573",
            "Deaths": "107",
            "Recoveries": "9354",
            "Active": "1112",
            "Cord_X": "16.75497",
            "Cord_Y": "75.72142"
        },
        {
            "State": "Ballari",
            "Cases": "32015",
            "Deaths": "464",
            "Recoveries": "28911",
            "Active": "2640",
            "Cord_X": "15.144633",
            "Cord_Y": "76.915886"
        },
        {
            "State": "Belagavi",
            "Cases": "19572",
            "Deaths": "290",
            "Recoveries": "17066",
            "Active": "2216",
            "Cord_X": "15.857267",
            "Cord_Y": "74.506934"
        },
        {
            "State": "Bengaluru Rural",
            "Cases": "9756",
            "Deaths": "96",
            "Recoveries": "7888",
            "Active": "1772",
            "Cord_X": "13.14219",
            "Cord_Y": "77.46213"
        },
        {
            "State": "Bengaluru Urban",
            "Cases": "237516",
            "Deaths": "2977",
            "Recoveries": "185063",
            "Active": "49476",
            "Cord_X": "12.97675",
            "Cord_Y": "77.57528"
        },
        {
            "State": "Bidar",
            "Cases": "6381",
            "Deaths": "154",
            "Recoveries": "5709",
            "Active": "518",
            "Cord_X": "17.914259",
            "Cord_Y": "77.524533"
        },
        {
            "State": "Chamarajanagar",
            "Cases": "4162",
            "Deaths": "78",
            "Recoveries": "3130",
            "Active": "954",
            "Cord_X": "50.5638",
            "Cord_Y": "1.61441"
        },
        {
            "State": "Chikkaballapura",
            "Cases": "7523",
            "Deaths": "86",
            "Recoveries": "5772",
            "Active": "1665",
            "Cord_X": "13.435255",
            "Cord_Y": "77.730687"
        },
        {
            "State": "Chikkamagaluru",
            "Cases": "8951",
            "Deaths": "122",
            "Recoveries": "7058",
            "Active": "1771",
            "Cord_X": "13.318014",
            "Cord_Y": "75.773874"
        },
        {
            "State": "Chitradurga",
            "Cases": "7435",
            "Deaths": "38",
            "Recoveries": "5954",
            "Active": "1443",
            "Cord_X": "14.226644",
            "Cord_Y": "76.400512"
        },
        {
            "State": "Dakshina Kannada",
            "Cases": "23439",
            "Deaths": "545",
            "Recoveries": "17088",
            "Active": "5806",
            "Cord_X": "12.811409",
            "Cord_Y": "75.100803"
        },
        {
            "State": "Davanagere",
            "Cases": "16241",
            "Deaths": "241",
            "Recoveries": "13453",
            "Active": "2547",
            "Cord_X": "14.466127",
            "Cord_Y": "75.920636"
        },
        {
            "State": "Dharwad",
            "Cases": "17627",
            "Deaths": "493",
            "Recoveries": "14487",
            "Active": "2647",
            "Cord_X": "15.454051",
            "Cord_Y": "75.006652"
        },
        {
            "State": "Gadag",
            "Cases": "9262",
            "Deaths": "131",
            "Recoveries": "8497",
            "Active": "634",
            "Cord_X": "15.426365",
            "Cord_Y": "75.630079"
        },
        {
            "State": "Hassan",
            "Cases": "17248",
            "Deaths": "298",
            "Recoveries": "13348",
            "Active": "3602",
            "Cord_X": "45.0994",
            "Cord_Y": "-93.488098"
        },
        {
            "State": "Haveri",
            "Cases": "8706",
            "Deaths": "161",
            "Recoveries": "6611",
            "Active": "1934",
            "Cord_X": "14.789751",
            "Cord_Y": "75.40353"
        },
        {
            "State": "Kalaburagi",
            "Cases": "17318",
            "Deaths": "277",
            "Recoveries": "14181",
            "Active": "2860",
            "Cord_X": "17.331",
            "Cord_Y": "76.833423"
        },
        {
            "State": "Kodagu",
            "Cases": "2803",
            "Deaths": "40",
            "Recoveries": "2185",
            "Active": "578",
            "Cord_X": "12.251925",
            "Cord_Y": "75.741215"
        },
        {
            "State": "Kolar",
            "Cases": "5904",
            "Deaths": "90",
            "Recoveries": "4670",
            "Active": "1144",
            "Cord_X": "13.13709",
            "Cord_Y": "78.133947"
        },
        {
            "State": "Koppal",
            "Cases": "11607",
            "Deaths": "232",
            "Recoveries": "9736",
            "Active": "1639",
            "Cord_X": "15.348414",
            "Cord_Y": "76.154742"
        },
        {
            "State": "Mandya",
            "Cases": "11311",
            "Deaths": "106",
            "Recoveries": "9226",
            "Active": "1979",
            "Cord_X": "12.521784",
            "Cord_Y": "76.893739"
        },
        {
            "State": "Mysuru",
            "Cases": "34619",
            "Deaths": "762",
            "Recoveries": "27393",
            "Active": "6464",
            "Cord_X": "12.305183",
            "Cord_Y": "76.655361"
        },
        {
            "State": "Raichur",
            "Cases": "11347",
            "Deaths": "136",
            "Recoveries": "9741",
            "Active": "1470",
            "Cord_X": "16.202495",
            "Cord_Y": "77.356854"
        },
        {
            "State": "Ramanagara",
            "Cases": "5220",
            "Deaths": "48",
            "Recoveries": "4513",
            "Active": "659",
            "Cord_X": "12.725277",
            "Cord_Y": "77.28048"
        },
        {
            "State": "Shivamogga",
            "Cases": "16491",
            "Deaths": "297",
            "Recoveries": "13011",
            "Active": "3183",
            "Cord_X": "13.931172",
            "Cord_Y": "75.569737"
        },
        {
            "State": "Tumakuru",
            "Cases": "13442",
            "Deaths": "243",
            "Recoveries": "9705",
            "Active": "3494",
            "Cord_X": "13.340077",
            "Cord_Y": "77.100621"
        },
        {
            "State": "Udupi",
            "Cases": "17419",
            "Deaths": "150",
            "Recoveries": "15297",
            "Active": "1972",
            "Cord_X": "13.341917",
            "Cord_Y": "74.747323"
        },
        {
            "State": "Uttara Kannada",
            "Cases": "9571",
            "Deaths": "111",
            "Recoveries": "6937",
            "Active": "2523",
            "Cord_X": "14.672638",
            "Cord_Y": "74.472916"
        },
        {
            "State": "Vijayapura",
            "Cases": "9753",
            "Deaths": "165",
            "Recoveries": "8707",
            "Active": "881",
            "Cord_X": "16.826925",
            "Cord_Y": "75.720105"
        },
        {
            "State": "Yadgir",
            "Cases": "8589",
            "Deaths": "53",
            "Recoveries": "7688",
            "Active": "848",
            "Cord_X": "16.768904",
            "Cord_Y": "77.138038"
        },
        {
            "State": "Kargil",
            "Cases": "1687",
            "Deaths": "34",
            "Recoveries": "1270",
            "Active": "383",
            "Cord_X": "34.56299",
            "Cord_Y": "76.12839"
        },
        {
            "State": "Leh",
            "Cases": "2582",
            "Deaths": "24",
            "Recoveries": "1877",
            "Active": "681",
            "Cord_X": "48.292287",
            "Cord_Y": "20.980487"
        },
        {
            "State": "Agar Malwa",
            "Cases": "397",
            "Deaths": "8",
            "Recoveries": "348",
            "Active": "41",
            "Cord_X": "23.71482",
            "Cord_Y": "76.00579"
        },
        {
            "State": "Alirajpur",
            "Cases": "972",
            "Deaths": "12",
            "Recoveries": "901",
            "Active": "59",
            "Cord_X": "22.303131",
            "Cord_Y": "74.354622"
        },
        {
            "State": "Anuppur",
            "Cases": "1134",
            "Deaths": "9",
            "Recoveries": "884",
            "Active": "241",
            "Cord_X": "23.11846",
            "Cord_Y": "81.699204"
        },
        {
            "State": "Ashoknagar",
            "Cases": "489",
            "Deaths": "14",
            "Recoveries": "421",
            "Active": "54",
            "Cord_X": "13.12959",
            "Cord_Y": "80.199539"
        },
        {
            "State": "Balaghat",
            "Cases": "1158",
            "Deaths": "7",
            "Recoveries": "760",
            "Active": "391",
            "Cord_X": "21.813342",
            "Cord_Y": "80.191669"
        },
        {
            "State": "Barwani",
            "Cases": "1828",
            "Deaths": "20",
            "Recoveries": "1587",
            "Active": "221",
            "Cord_X": "22.034158",
            "Cord_Y": "74.896314"
        },
        {
            "State": "Betul",
            "Cases": "1867",
            "Deaths": "44",
            "Recoveries": "1433",
            "Active": "390",
            "Cord_X": "21.833333",
            "Cord_Y": "77.833333"
        },
        {
            "State": "Bhind",
            "Cases": "963",
            "Deaths": "7",
            "Recoveries": "806",
            "Active": "150",
            "Cord_X": "26.565236",
            "Cord_Y": "78.788986"
        },
        {
            "State": "Bhopal",
            "Cases": "17673",
            "Deaths": "394",
            "Recoveries": "15143",
            "Active": "2136",
            "Cord_X": "23.260663",
            "Cord_Y": "77.39406"
        },
        {
            "State": "Burhanpur",
            "Cases": "713",
            "Deaths": "25",
            "Recoveries": "655",
            "Active": "33",
            "Cord_X": "21.309846",
            "Cord_Y": "76.23173"
        },
        {
            "State": "Chhatarpur",
            "Cases": "1261",
            "Deaths": "25",
            "Recoveries": "1094",
            "Active": "142",
            "Cord_X": "24.915717",
            "Cord_Y": "79.585349"
        },
        {
            "State": "Chhindwara",
            "Cases": "1408",
            "Deaths": "23",
            "Recoveries": "1008",
            "Active": "377",
            "Cord_X": "22.057824",
            "Cord_Y": "78.93862"
        },
        {
            "State": "Damoh",
            "Cases": "1704",
            "Deaths": "33",
            "Recoveries": "1140",
            "Active": "531",
            "Cord_X": "23.839568",
            "Cord_Y": "79.444436"
        },
        {
            "State": "Datia",
            "Cases": "1236",
            "Deaths": "17",
            "Recoveries": "1042",
            "Active": "177",
            "Cord_X": "25.75",
            "Cord_Y": "78.5"
        },
        {
            "State": "Dewas",
            "Cases": "1477",
            "Deaths": "21",
            "Recoveries": "1171",
            "Active": "285",
            "Cord_X": "22.96363",
            "Cord_Y": "76.054867"
        },
        {
            "State": "Dhar",
            "Cases": "2275",
            "Deaths": "31",
            "Recoveries": "1884",
            "Active": "360",
            "Cord_X": "22.59724",
            "Cord_Y": "75.306565"
        },
        {
            "State": "Dindori",
            "Cases": "488",
            "Deaths": "0",
            "Recoveries": "385",
            "Active": "103",
            "Cord_X": "49.237803",
            "Cord_Y": "4.411326"
        },
        {
            "State": "Guna",
            "Cases": "760",
            "Deaths": "14",
            "Recoveries": "607",
            "Active": "139",
            "Cord_X": "24.647663",
            "Cord_Y": "77.316178"
        },
        {
            "State": "Gwalior",
            "Cases": "10647",
            "Deaths": "131",
            "Recoveries": "8828",
            "Active": "1688",
            "Cord_X": "26.203725",
            "Cord_Y": "78.157363"
        },
        {
            "State": "Harda",
            "Cases": "928",
            "Deaths": "15",
            "Recoveries": "725",
            "Active": "188",
            "Cord_X": "22.338883",
            "Cord_Y": "77.092993"
        },
        {
            "State": "Hoshangabad",
            "Cases": "1732",
            "Deaths": "39",
            "Recoveries": "1303",
            "Active": "390",
            "Cord_X": "22.754554",
            "Cord_Y": "77.719825"
        },
        {
            "State": "Indore",
            "Cases": "24475",
            "Deaths": "572",
            "Recoveries": "19370",
            "Active": "4533",
            "Cord_X": "22.720385",
            "Cord_Y": "75.86821"
        },
        {
            "State": "Jabalpur",
            "Cases": "9907",
            "Deaths": "151",
            "Recoveries": "8589",
            "Active": "1167",
            "Cord_X": "23.160938",
            "Cord_Y": "79.949717"
        },
        {
            "State": "Jhabua",
            "Cases": "1426",
            "Deaths": "13",
            "Recoveries": "1149",
            "Active": "264",
            "Cord_X": "22.769674",
            "Cord_Y": "74.591217"
        },
        {
            "State": "Katni",
            "Cases": "1233",
            "Deaths": "15",
            "Recoveries": "1050",
            "Active": "168",
            "Cord_X": "23.834383",
            "Cord_Y": "80.389306"
        },
        {
            "State": "Khandwa",
            "Cases": "1547",
            "Deaths": "36",
            "Recoveries": "1353",
            "Active": "158",
            "Cord_X": "21.820535",
            "Cord_Y": "76.35683"
        },
        {
            "State": "Khargone",
            "Cases": "3361",
            "Deaths": "43",
            "Recoveries": "2921",
            "Active": "397",
            "Cord_X": "21.833333",
            "Cord_Y": "75.5"
        },
        {
            "State": "Mandla",
            "Cases": "704",
            "Deaths": "7",
            "Recoveries": "570",
            "Active": "127",
            "Cord_X": "22.598776",
            "Cord_Y": "80.371389"
        },
        {
            "State": "Mandsaur",
            "Cases": "1562",
            "Deaths": "15",
            "Recoveries": "1323",
            "Active": "224",
            "Cord_X": "24.069798",
            "Cord_Y": "75.073391"
        },
        {
            "State": "Morena",
            "Cases": "2595",
            "Deaths": "21",
            "Recoveries": "2442",
            "Active": "132",
            "Cord_X": "26.490991",
            "Cord_Y": "77.981366"
        },
        {
            "State": "Narsinghpur",
            "Cases": "2466",
            "Deaths": "15",
            "Recoveries": "2098",
            "Active": "353",
            "Cord_X": "22.94674",
            "Cord_Y": "79.198672"
        },
        {
            "State": "Neemuch",
            "Cases": "2014",
            "Deaths": "32",
            "Recoveries": "1757",
            "Active": "225",
            "Cord_X": "24.461175",
            "Cord_Y": "74.877272"
        },
        {
            "State": "Niwari",
            "Cases": "327",
            "Deaths": "1",
            "Recoveries": "312",
            "Active": "14",
            "Cord_X": "49.954415",
            "Cord_Y": "3.255717"
        },
        {
            "State": "Panna",
            "Cases": "685",
            "Deaths": "2",
            "Recoveries": "562",
            "Active": "121",
            "Cord_X": "18.520644",
            "Cord_Y": "73.854405"
        },
        {
            "State": "Raisen",
            "Cases": "1275",
            "Deaths": "27",
            "Recoveries": "1051",
            "Active": "197",
            "Cord_X": "50.451188",
            "Cord_Y": "-104.616618"
        },
        {
            "State": "Rajgarh",
            "Cases": "1297",
            "Deaths": "24",
            "Recoveries": "1133",
            "Active": "140",
            "Cord_X": "27.242032",
            "Cord_Y": "76.609484"
        },
        {
            "State": "Ratlam",
            "Cases": "2019",
            "Deaths": "39",
            "Recoveries": "1727",
            "Active": "253",
            "Cord_X": "23.331541",
            "Cord_Y": "75.036658"
        },
        {
            "State": "Rewa",
            "Cases": "1728",
            "Deaths": "28",
            "Recoveries": "1369",
            "Active": "331",
            "Cord_X": "54.62944",
            "Cord_Y": "18.500682"
        },
        {
            "State": "Sagar",
            "Cases": "2510",
            "Deaths": "100",
            "Recoveries": "1739",
            "Active": "671",
            "Cord_X": "23.841779",
            "Cord_Y": "78.746682"
        },
        {
            "State": "Satna",
            "Cases": "1526",
            "Deaths": "28",
            "Recoveries": "1320",
            "Active": "178",
            "Cord_X": "24.575131",
            "Cord_Y": "80.832572"
        },
        {
            "State": "Sehore",
            "Cases": "1568",
            "Deaths": "32",
            "Recoveries": "1235",
            "Active": "301",
            "Cord_X": "23.20492",
            "Cord_Y": "77.084575"
        },
        {
            "State": "Seoni",
            "Cases": "1005",
            "Deaths": "7",
            "Recoveries": "790",
            "Active": "208",
            "Cord_X": "22.091005",
            "Cord_Y": "79.550779"
        },
        {
            "State": "Shahdol",
            "Cases": "2000",
            "Deaths": "20",
            "Recoveries": "1526",
            "Active": "454",
            "Cord_X": "23.300234",
            "Cord_Y": "81.364771"
        },
        {
            "State": "Shajapur",
            "Cases": "924",
            "Deaths": "12",
            "Recoveries": "773",
            "Active": "139",
            "Cord_X": "23.5",
            "Cord_Y": "76.25"
        },
        {
            "State": "Sheopur",
            "Cases": "847",
            "Deaths": "5",
            "Recoveries": "743",
            "Active": "99",
            "Cord_X": "25.66879",
            "Cord_Y": "76.693758"
        },
        {
            "State": "Shivpuri",
            "Cases": "2143",
            "Deaths": "21",
            "Recoveries": "1898",
            "Active": "224",
            "Cord_X": "25.423526",
            "Cord_Y": "77.655142"
        },
        {
            "State": "Sidhi",
            "Cases": "881",
            "Deaths": "5",
            "Recoveries": "655",
            "Active": "221",
            "Cord_X": "48.681874",
            "Cord_Y": "3.716234"
        },
        {
            "State": "Singrauli",
            "Cases": "853",
            "Deaths": "17",
            "Recoveries": "642",
            "Active": "194",
            "Cord_X": "24.197443",
            "Cord_Y": "82.666145"
        },
        {
            "State": "Tikamgarh",
            "Cases": "809",
            "Deaths": "25",
            "Recoveries": "667",
            "Active": "117",
            "Cord_X": "24.75",
            "Cord_Y": "79"
        },
        {
            "State": "Ujjain",
            "Cases": "2989",
            "Deaths": "94",
            "Recoveries": "2479",
            "Active": "416",
            "Cord_X": "23.174597",
            "Cord_Y": "75.785142"
        },
        {
            "State": "Umaria",
            "Cases": "598",
            "Deaths": "7",
            "Recoveries": "427",
            "Active": "164",
            "Cord_X": "35.670952",
            "Cord_Y": "139.057595"
        },
        {
            "State": "Vidisha",
            "Cases": "1704",
            "Deaths": "33",
            "Recoveries": "1484",
            "Active": "187",
            "Cord_X": "23.5222",
            "Cord_Y": "77.8036"
        },
        {
            "State": "Ahmednagar",
            "Cases": "43018",
            "Deaths": "696",
            "Recoveries": "34515",
            "Active": "7807",
            "Cord_X": "19.092952",
            "Cord_Y": "74.749345"
        },
        {
            "State": "Akola",
            "Cases": "7333",
            "Deaths": "232",
            "Recoveries": "5021",
            "Active": "2080",
            "Cord_X": "20.71166",
            "Cord_Y": "77.002632"
        },
        {
            "State": "Amravati",
            "Cases": "13816",
            "Deaths": "278",
            "Recoveries": "11390",
            "Active": "2148",
            "Cord_X": "20.933366",
            "Cord_Y": "77.757113"
        },
        {
            "State": "Aurangabad",
            "Cases": "36371",
            "Deaths": "899",
            "Recoveries": "25619",
            "Active": "9853",
            "Cord_X": "24.751721",
            "Cord_Y": "84.377805"
        },
        {
            "State": "Beed",
            "Cases": "10576",
            "Deaths": "280",
            "Recoveries": "7396",
            "Active": "2900",
            "Cord_X": "18.990406",
            "Cord_Y": "75.754229"
        },
        {
            "State": "Bhandara",
            "Cases": "5885",
            "Deaths": "100",
            "Recoveries": "3936",
            "Active": "1849",
            "Cord_X": "21.164982",
            "Cord_Y": "79.653277"
        },
        {
            "State": "Buldhana",
            "Cases": "7968",
            "Deaths": "123",
            "Recoveries": "5229",
            "Active": "2616",
            "Cord_X": "20.53208",
            "Cord_Y": "76.179911"
        },
        {
            "State": "Chandrapur",
            "Cases": "10658",
            "Deaths": "147",
            "Recoveries": "6062",
            "Active": "4449",
            "Cord_X": "19.950816",
            "Cord_Y": "79.298667"
        },
        {
            "State": "Dhule",
            "Cases": "12540",
            "Deaths": "331",
            "Recoveries": "11417",
            "Active": "792",
            "Cord_X": "20.898",
            "Cord_Y": "74.7732"
        },
        {
            "State": "Gadchiroli",
            "Cases": "2378",
            "Deaths": "16",
            "Recoveries": "1646",
            "Active": "716",
            "Cord_X": "20.185397",
            "Cord_Y": "80.003509"
        },
        {
            "State": "Gondia",
            "Cases": "7283",
            "Deaths": "72",
            "Recoveries": "4795",
            "Active": "2416",
            "Cord_X": "21.455228",
            "Cord_Y": "80.196273"
        },
        {
            "State": "Hingoli",
            "Cases": "3090",
            "Deaths": "57",
            "Recoveries": "2420",
            "Active": "613",
            "Cord_X": "19.715847",
            "Cord_Y": "77.138836"
        },
        {
            "State": "Jalgaon",
            "Cases": "48027",
            "Deaths": "1259",
            "Recoveries": "40617",
            "Active": "6151",
            "Cord_X": "20.996845",
            "Cord_Y": "75.56838"
        },
        {
            "State": "Jalna",
            "Cases": "7858",
            "Deaths": "191",
            "Recoveries": "5439",
            "Active": "2228",
            "Cord_X": "19.840916",
            "Cord_Y": "75.882487"
        },
        {
            "State": "Kolhapur",
            "Cases": "43779",
            "Deaths": "1352",
            "Recoveries": "34788",
            "Active": "7639",
            "Cord_X": "16.704979",
            "Cord_Y": "74.236016"
        },
        {
            "State": "Latur",
            "Cases": "17672",
            "Deaths": "493",
            "Recoveries": "13410",
            "Active": "3769",
            "Cord_X": "18.398339",
            "Cord_Y": "76.562087"
        },
        {
            "State": "Mumbai City",
            "Cases": "207620",
            "Deaths": "8972",
            "Recoveries": "170678",
            "Active": "27970",
            "Cord_X": "19.07933",
            "Cord_Y": "72.88747"
        },
        {
            "State": "Nagpur",
            "Cases": "78998",
            "Deaths": "2095",
            "Recoveries": "63318",
            "Active": "13585",
            "Cord_X": "21.149804",
            "Cord_Y": "79.080609"
        },
        {
            "State": "Nanded",
            "Cases": "16244",
            "Deaths": "407",
            "Recoveries": "9722",
            "Active": "6115",
            "Cord_X": "19.169335",
            "Cord_Y": "77.311013"
        },
        {
            "State": "Nandurbar",
            "Cases": "5378",
            "Deaths": "120",
            "Recoveries": "4449",
            "Active": "809",
            "Cord_X": "21.363778",
            "Cord_Y": "74.241142"
        },
        {
            "State": "Nashik",
            "Cases": "77456",
            "Deaths": "1306",
            "Recoveries": "60848",
            "Active": "15302",
            "Cord_X": "20.011248",
            "Cord_Y": "73.790236"
        },
        {
            "State": "Osmanabad",
            "Cases": "12630",
            "Deaths": "372",
            "Recoveries": "9021",
            "Active": "3237",
            "Cord_X": "18.185364",
            "Cord_Y": "76.042"
        },
        {
            "State": "Palghar",
            "Cases": "37477",
            "Deaths": "886",
            "Recoveries": "29958",
            "Active": "6633",
            "Cord_X": "19.697875",
            "Cord_Y": "72.768694"
        },
        {
            "State": "Parbhani",
            "Cases": "5505",
            "Deaths": "197",
            "Recoveries": "4011",
            "Active": "1297",
            "Cord_X": "19.262469",
            "Cord_Y": "76.7718"
        },
        {
            "State": "Pune",
            "Cases": "295689",
            "Deaths": "5858",
            "Recoveries": "232370",
            "Active": "57461",
            "Cord_X": "18.520644",
            "Cord_Y": "73.854405"
        },
        {
            "State": "Raigad",
            "Cases": "51859",
            "Deaths": "1172",
            "Recoveries": "43354",
            "Active": "7333",
            "Cord_X": "44.76453",
            "Cord_Y": "0.2074"
        },
        {
            "State": "Ratnagiri",
            "Cases": "8565",
            "Deaths": "280",
            "Recoveries": "6146",
            "Active": "2139",
            "Cord_X": "16.993352",
            "Cord_Y": "73.295437"
        },
        {
            "State": "Sangli",
            "Cases": "38690",
            "Deaths": "1195",
            "Recoveries": "29679",
            "Active": "7816",
            "Cord_X": "16.850253",
            "Cord_Y": "74.594889"
        },
        {
            "State": "Satara",
            "Cases": "37418",
            "Deaths": "972",
            "Recoveries": "28060",
            "Active": "8386",
            "Cord_X": "61.103294",
            "Cord_Y": "22.219448"
        },
        {
            "State": "Sindhudurg",
            "Cases": "3954",
            "Deaths": "95",
            "Recoveries": "2636",
            "Active": "1223",
            "Cord_X": "16.69316",
            "Cord_Y": "74.22598"
        },
        {
            "State": "Solapur",
            "Cases": "36672",
            "Deaths": "1150",
            "Recoveries": "28826",
            "Active": "6696",
            "Cord_X": "17.671527",
            "Cord_Y": "75.89755"
        },
        {
            "State": "Thane",
            "Cases": "189108",
            "Deaths": "4919",
            "Recoveries": "154314",
            "Active": "29875",
            "Cord_X": "19.194329",
            "Cord_Y": "72.970178"
        },
        {
            "State": "Wardha",
            "Cases": "4479",
            "Deaths": "74",
            "Recoveries": "2805",
            "Active": "1600",
            "Cord_X": "20.746494",
            "Cord_Y": "78.599792"
        },
        {
            "State": "Washim",
            "Cases": "4360",
            "Deaths": "92",
            "Recoveries": "3561",
            "Active": "707",
            "Cord_X": "20.110195",
            "Cord_Y": "77.129143"
        },
        {
            "State": "Yavatmal",
            "Cases": "8954",
            "Deaths": "226",
            "Recoveries": "6542",
            "Active": "2186",
            "Cord_X": "20.390344",
            "Cord_Y": "78.132852"
        },
        {
            "State": "Manipur",
            "Cases": "11111",
            "Deaths": "68",
            "Recoveries": "8641",
            "Active": "2402",
            "Cord_X": "24.720882",
            "Cord_Y": "93.922939"
        },
        {
            "State": "East Garo Hills",
            "Cases": "118",
            "Deaths": "0",
            "Recoveries": "107",
            "Active": "11",
            "Cord_X": "25.727735",
            "Cord_Y": "90.694585"
        },
        {
            "State": "East Jaintia Hills",
            "Cases": "337",
            "Deaths": "0",
            "Recoveries": "121",
            "Active": "216",
            "Cord_X": "25.389881",
            "Cord_Y": "92.405358"
        },
        {
            "State": "East Khasi Hills",
            "Cases": "3773",
            "Deaths": "47",
            "Recoveries": "2608",
            "Active": "1118",
            "Cord_X": "26.10759",
            "Cord_Y": "91.82195"
        },
        {
            "State": "North Garo Hills",
            "Cases": "55",
            "Deaths": "0",
            "Recoveries": "31",
            "Active": "24",
            "Cord_X": "36.265715",
            "Cord_Y": "-80.84984"
        },
        {
            "State": "Ri-Bhoi",
            "Cases": "492",
            "Deaths": "0",
            "Recoveries": "338",
            "Active": "154",
            "Cord_X": "25.891644",
            "Cord_Y": "91.852693"
        },
        {
            "State": "South Garo Hills",
            "Cases": "40",
            "Deaths": "0",
            "Recoveries": "37",
            "Active": "3",
            "Cord_X": "25.341266",
            "Cord_Y": "90.558125"
        },
        {
            "State": "South West Garo Hills",
            "Cases": "58",
            "Deaths": "1",
            "Recoveries": "35",
            "Active": "22",
            "Cord_X": "31.714264",
            "Cord_Y": "-91.065234"
        },
        {
            "State": "South West Khasi Hills",
            "Cases": "11",
            "Deaths": "0",
            "Recoveries": "6",
            "Active": "5",
            "Cord_X": "31.714264",
            "Cord_Y": "-91.065234"
        },
        {
            "State": "West Garo Hills",
            "Cases": "795",
            "Deaths": "2",
            "Recoveries": "620",
            "Active": "173",
            "Cord_X": "25.93625",
            "Cord_Y": "90.40693"
        },
        {
            "State": "West Jaintia Hills",
            "Cases": "55",
            "Deaths": "0",
            "Recoveries": "40",
            "Active": "15",
            "Cord_X": "25.389881",
            "Cord_Y": "92.405358"
        },
        {
            "State": "West Khasi Hills",
            "Cases": "68",
            "Deaths": "1",
            "Recoveries": "58",
            "Active": "9",
            "Cord_X": "25.516325",
            "Cord_Y": "91.174041"
        },
        {
            "State": "Aizawl",
            "Cases": "1377",
            "Deaths": "0",
            "Recoveries": "1192",
            "Active": "185",
            "Cord_X": "23.741409",
            "Cord_Y": "92.72093"
        },
        {
            "State": "Champhai",
            "Cases": "20",
            "Deaths": "0",
            "Recoveries": "17",
            "Active": "3",
            "Cord_X": "47.2932",
            "Cord_Y": "5.00308"
        },
        {
            "State": "Hnahthial",
            "Cases": "5",
            "Deaths": "0",
            "Recoveries": "5",
            "Active": "0",
            "Cord_X": "22.965",
            "Cord_Y": "92.9272"
        },
        {
            "State": "Khawzawl",
            "Cases": "4",
            "Deaths": "0",
            "Recoveries": "4",
            "Active": "0",
            "Cord_X": "23.5175",
            "Cord_Y": "93.1893"
        },
        {
            "State": "Kolasib",
            "Cases": "225",
            "Deaths": "0",
            "Recoveries": "212",
            "Active": "13",
            "Cord_X": "24.226466",
            "Cord_Y": "92.677349"
        },
        {
            "State": "Lawngtlai",
            "Cases": "47",
            "Deaths": "0",
            "Recoveries": "37",
            "Active": "10",
            "Cord_X": "22.528026",
            "Cord_Y": "92.897952"
        },
        {
            "State": "Lunglei",
            "Cases": "200",
            "Deaths": "0",
            "Recoveries": "159",
            "Active": "41",
            "Cord_X": "22.89317",
            "Cord_Y": "92.747039"
        },
        {
            "State": "Mamit",
            "Cases": "39",
            "Deaths": "0",
            "Recoveries": "33",
            "Active": "6",
            "Cord_X": "23.916009",
            "Cord_Y": "92.493582"
        },
        {
            "State": "Saiha",
            "Cases": "31",
            "Deaths": "0",
            "Recoveries": "31",
            "Active": "0",
            "Cord_X": "22.489957",
            "Cord_Y": "92.981211"
        },
        {
            "State": "Saitual",
            "Cases": "11",
            "Deaths": "0",
            "Recoveries": "11",
            "Active": "0",
            "Cord_X": "47.603229",
            "Cord_Y": "-122.33028"
        },
        {
            "State": "Serchhip",
            "Cases": "59",
            "Deaths": "0",
            "Recoveries": "20",
            "Active": "39",
            "Cord_X": "23.3083",
            "Cord_Y": "92.8564"
        },
        {
            "State": "Dimapur",
            "Cases": "3184",
            "Deaths": "9",
            "Recoveries": "2410",
            "Active": "765",
            "Cord_X": "25.913552",
            "Cord_Y": "93.728414"
        },
        {
            "State": "Kiphire",
            "Cases": "16",
            "Deaths": "0",
            "Recoveries": "16",
            "Active": "0",
            "Cord_X": "25.88673",
            "Cord_Y": "94.786349"
        },
        {
            "State": "Kohima",
            "Cases": "1895",
            "Deaths": "1",
            "Recoveries": "1643",
            "Active": "251",
            "Cord_X": "25.661876",
            "Cord_Y": "94.101916"
        },
        {
            "State": "Longleng",
            "Cases": "12",
            "Deaths": "0",
            "Recoveries": "6",
            "Active": "6",
            "Cord_X": "40.813599",
            "Cord_Y": "-96.70261"
        },
        {
            "State": "Mokokchung",
            "Cases": "48",
            "Deaths": "0",
            "Recoveries": "37",
            "Active": "11",
            "Cord_X": "26.323876",
            "Cord_Y": "94.52141"
        },
        {
            "State": "Mon",
            "Cases": "410",
            "Deaths": "2",
            "Recoveries": "325",
            "Active": "83",
            "Cord_X": "46.649756",
            "Cord_Y": "9.564005"
        },
        {
            "State": "Peren",
            "Cases": "351",
            "Deaths": "0",
            "Recoveries": "351",
            "Active": "0",
            "Cord_X": "25.53996",
            "Cord_Y": "93.73507"
        },
        {
            "State": "Phek",
            "Cases": "36",
            "Deaths": "0",
            "Recoveries": "34",
            "Active": "2",
            "Cord_X": "25.75",
            "Cord_Y": "94.5"
        },
        {
            "State": "Tuensang",
            "Cases": "85",
            "Deaths": "0",
            "Recoveries": "77",
            "Active": "8",
            "Cord_X": "26.239331",
            "Cord_Y": "94.814693"
        },
        {
            "State": "Wokha",
            "Cases": "36",
            "Deaths": "0",
            "Recoveries": "35",
            "Active": "1",
            "Cord_X": "26.097896",
            "Cord_Y": "94.254845"
        },
        {
            "State": "Zunheboto",
            "Cases": "125",
            "Deaths": "0",
            "Recoveries": "119",
            "Active": "6",
            "Cord_X": "26.015029",
            "Cord_Y": "94.528873"
        },
        {
            "State": "Karaikal",
            "Cases": "2596",
            "Deaths": "39",
            "Recoveries": "1869",
            "Active": "688",
            "Cord_X": "10.91571",
            "Cord_Y": "79.837576"
        },
        {
            "State": "Mahe",
            "Cases": "303",
            "Deaths": "0",
            "Recoveries": "207",
            "Active": "96",
            "Cord_X": "35.369167",
            "Cord_Y": "104.604722"
        },
        {
            "State": "Puducherry",
            "Cases": "23447",
            "Deaths": "445",
            "Recoveries": "18982",
            "Active": "4020",
            "Cord_X": "11.934057",
            "Cord_Y": "79.830645"
        },
        {
            "State": "Yanam",
            "Cases": "1678",
            "Deaths": "41",
            "Recoveries": "1447",
            "Active": "190",
            "Cord_X": "16.748068",
            "Cord_Y": "82.216112"
        },
        {
            "State": "Ajmer",
            "Cases": "7016",
            "Deaths": "106",
            "Recoveries": "6663",
            "Active": "247",
            "Cord_X": "26.4691",
            "Cord_Y": "74.639"
        },
        {
            "State": "Alwar",
            "Cases": "10897",
            "Deaths": "42",
            "Recoveries": "10560",
            "Active": "295",
            "Cord_X": "27.564607",
            "Cord_Y": "76.613122"
        },
        {
            "State": "Banswara",
            "Cases": "1223",
            "Deaths": "20",
            "Recoveries": "1099",
            "Active": "104",
            "Cord_X": "23.550075",
            "Cord_Y": "74.446294"
        },
        {
            "State": "Baran",
            "Cases": "1305",
            "Deaths": "23",
            "Recoveries": "1192",
            "Active": "90",
            "Cord_X": "25.09819",
            "Cord_Y": "76.516988"
        },
        {
            "State": "Barmer",
            "Cases": "2785",
            "Deaths": "29",
            "Recoveries": "2630",
            "Active": "126",
            "Cord_X": "25.75",
            "Cord_Y": "71.5"
        },
        {
            "State": "Bharatpur",
            "Cases": "4371",
            "Deaths": "81",
            "Recoveries": "4153",
            "Active": "137",
            "Cord_X": "27.680671",
            "Cord_Y": "84.430818"
        },
        {
            "State": "Bhilwara",
            "Cases": "4302",
            "Deaths": "20",
            "Recoveries": "3933",
            "Active": "349",
            "Cord_X": "25.348",
            "Cord_Y": "74.636"
        },
        {
            "State": "Bikaner",
            "Cases": "6712",
            "Deaths": "113",
            "Recoveries": "6198",
            "Active": "401",
            "Cord_X": "28.015929",
            "Cord_Y": "73.317137"
        },
        {
            "State": "Bundi",
            "Cases": "1239",
            "Deaths": "7",
            "Recoveries": "1154",
            "Active": "78",
            "Cord_X": "25.441614",
            "Cord_Y": "75.637582"
        },
        {
            "State": "Chittorgarh",
            "Cases": "1712",
            "Deaths": "18",
            "Recoveries": "1521",
            "Active": "173",
            "Cord_X": "24.883716",
            "Cord_Y": "74.624416"
        },
        {
            "State": "Churu",
            "Cases": "1842",
            "Deaths": "14",
            "Recoveries": "1641",
            "Active": "187",
            "Cord_X": "28.298335",
            "Cord_Y": "74.967931"
        },
        {
            "State": "Dausa",
            "Cases": "1105",
            "Deaths": "9",
            "Recoveries": "920",
            "Active": "176",
            "Cord_X": "26.893342",
            "Cord_Y": "76.337651"
        },
        {
            "State": "Dholpur",
            "Cases": "2941",
            "Deaths": "24",
            "Recoveries": "2798",
            "Active": "119",
            "Cord_X": "26.70099",
            "Cord_Y": "77.896786"
        },
        {
            "State": "Dungarpur",
            "Cases": "1871",
            "Deaths": "16",
            "Recoveries": "1698",
            "Active": "157",
            "Cord_X": "23.853889",
            "Cord_Y": "73.708718"
        },
        {
            "State": "Ganganagar",
            "Cases": "1526",
            "Deaths": "16",
            "Recoveries": "1246",
            "Active": "264",
            "Cord_X": "29.927056",
            "Cord_Y": "73.876152"
        },
        {
            "State": "Hanumangarh",
            "Cases": "945",
            "Deaths": "4",
            "Recoveries": "759",
            "Active": "182",
            "Cord_X": "29.622818",
            "Cord_Y": "74.288043"
        },
        {
            "State": "Jaipur",
            "Cases": "21920",
            "Deaths": "322",
            "Recoveries": "13649",
            "Active": "7949",
            "Cord_X": "26.916129",
            "Cord_Y": "75.820406"
        },
        {
            "State": "Jaisalmer",
            "Cases": "852",
            "Deaths": "10",
            "Recoveries": "712",
            "Active": "130",
            "Cord_X": "26.918896",
            "Cord_Y": "70.925521"
        },
        {
            "State": "Jalore",
            "Cases": "2493",
            "Deaths": "20",
            "Recoveries": "1998",
            "Active": "475",
            "Cord_X": "25.347601",
            "Cord_Y": "72.626092"
        },
        {
            "State": "Jhalawar",
            "Cases": "2413",
            "Deaths": "10",
            "Recoveries": "2281",
            "Active": "122",
            "Cord_X": "24.593175",
            "Cord_Y": "76.166453"
        },
        {
            "State": "Jhunjhunu",
            "Cases": "1762",
            "Deaths": "12",
            "Recoveries": "1498",
            "Active": "252",
            "Cord_X": "28.1288",
            "Cord_Y": "75.399258"
        },
        {
            "State": "Jodhpur",
            "Cases": "20490",
            "Deaths": "145",
            "Recoveries": "15897",
            "Active": "4448",
            "Cord_X": "26.29893",
            "Cord_Y": "73.0334"
        },
        {
            "State": "Karauli",
            "Cases": "940",
            "Deaths": "10",
            "Recoveries": "776",
            "Active": "154",
            "Cord_X": "26.4956",
            "Cord_Y": "77.0275"
        },
        {
            "State": "Kota",
            "Cases": "9107",
            "Deaths": "101",
            "Recoveries": "7596",
            "Active": "1410",
            "Cord_X": "25.17364",
            "Cord_Y": "75.857437"
        },
        {
            "State": "Nagaur",
            "Cases": "3762",
            "Deaths": "46",
            "Recoveries": "3434",
            "Active": "282",
            "Cord_X": "26.34454",
            "Cord_Y": "73.0627"
        },
        {
            "State": "Pali",
            "Cases": "5907",
            "Deaths": "63",
            "Recoveries": "5387",
            "Active": "457",
            "Cord_X": "47.474812",
            "Cord_Y": "17.16619"
        },
        {
            "State": "Pratapgarh",
            "Cases": "799",
            "Deaths": "12",
            "Recoveries": "711",
            "Active": "76",
            "Cord_X": "25.921351",
            "Cord_Y": "82.002911"
        },
        {
            "State": "Rajsamand",
            "Cases": "1904",
            "Deaths": "24",
            "Recoveries": "1598",
            "Active": "282",
            "Cord_X": "25.058303",
            "Cord_Y": "73.891482"
        },
        {
            "State": "Sawai Madhopur",
            "Cases": "921",
            "Deaths": "19",
            "Recoveries": "799",
            "Active": "103",
            "Cord_X": "26.018892",
            "Cord_Y": "76.352244"
        },
        {
            "State": "Sikar",
            "Cases": "4173",
            "Deaths": "34",
            "Recoveries": "3587",
            "Active": "552",
            "Cord_X": "27.609186",
            "Cord_Y": "75.13955"
        },
        {
            "State": "Sirohi",
            "Cases": "2028",
            "Deaths": "22",
            "Recoveries": "1732",
            "Active": "274",
            "Cord_X": "24.8858",
            "Cord_Y": "72.8589"
        },
        {
            "State": "Tonk",
            "Cases": "1314",
            "Deaths": "19",
            "Recoveries": "1121",
            "Active": "174",
            "Cord_X": "26.161143",
            "Cord_Y": "75.785835"
        },
        {
            "State": "Udaipur",
            "Cases": "4571",
            "Deaths": "50",
            "Recoveries": "3939",
            "Active": "582",
            "Cord_X": "24.578723",
            "Cord_Y": "73.686255"
        },
        {
            "State": "Sikkim",
            "Cases": "2969",
            "Deaths": "40",
            "Recoveries": "2294",
            "Active": "635",
            "Cord_X": "27.601029",
            "Cord_Y": "88.454136"
        },
        {
            "State": "Thiruvananthapuram",
            "Cases": "36433",
            "Deaths": "239",
            "Recoveries": "24037",
            "Active": "12121",
            "Cord_X": "8.505749",
            "Cord_Y": "76.957356"
        },
        {
            "State": "Ernakulam",
            "Cases": "20208",
            "Deaths": "72",
            "Recoveries": "10967",
            "Active": "9161",
            "Cord_X": "9.988381",
            "Cord_Y": "76.286344"
        },
        {
            "State": "Kozhikode",
            "Cases": "21037",
            "Deaths": "70",
            "Recoveries": "12960",
            "Active": "8001",
            "Cord_X": "11.244614",
            "Cord_Y": "75.775937"
        },
        {
            "State": "Kollam",
            "Cases": "15528",
            "Deaths": "60",
            "Recoveries": "8676",
            "Active": "6788",
            "Cord_X": "8.887094",
            "Cord_Y": "76.590684"
        },
        {
            "State": "Malappuram",
            "Cases": "24527",
            "Deaths": "73",
            "Recoveries": "17875",
            "Active": "6573",
            "Cord_X": "11.042025",
            "Cord_Y": "76.080408"
        },
        {
            "State": "Thrissur",
            "Cases": "15058",
            "Deaths": "55",
            "Recoveries": "8563",
            "Active": "6437",
            "Cord_X": "10.52519",
            "Cord_Y": "76.215983"
        },
        {
            "State": "Alappuzha",
            "Cases": "15670",
            "Deaths": "44",
            "Recoveries": "10212",
            "Active": "5409",
            "Cord_X": "9.4981",
            "Cord_Y": "76.3326"
        },
        {
            "State": "Kannur",
            "Cases": "12549",
            "Deaths": "47",
            "Recoveries": "7300",
            "Active": "5199",
            "Cord_X": "11.876225",
            "Cord_Y": "75.373804"
        },
        {
            "State": "Palakkad",
            "Cases": "13009",
            "Deaths": "38",
            "Recoveries": "7998",
            "Active": "4972",
            "Cord_X": "10.775923",
            "Cord_Y": "76.643801"
        },
        {
            "State": "Kottayam",
            "Cases": "11489",
            "Deaths": "23",
            "Recoveries": "6739",
            "Active": "4727",
            "Cord_X": "9.591605",
            "Cord_Y": "76.52213"
        },
        {
            "State": "Kasaragod",
            "Cases": "11732",
            "Deaths": "56",
            "Recoveries": "8176",
            "Active": "3496",
            "Cord_X": "12.502028",
            "Cord_Y": "74.989993"
        },
        {
            "State": "Pathanamthitta",
            "Cases": "8307",
            "Deaths": "6",
            "Recoveries": "6063",
            "Active": "2237",
            "Cord_X": "9.265534",
            "Cord_Y": "76.787151"
        },
        {
            "State": "Idukki",
            "Cases": "4058",
            "Deaths": "3",
            "Recoveries": "2820",
            "Active": "1233",
            "Cord_X": "9.849787",
            "Cord_Y": "76.979791"
        },
        {
            "State": "Wayanad",
            "Cases": "3894",
            "Deaths": "5",
            "Recoveries": "2758",
            "Active": "1131",
            "Cord_X": "11.67729",
            "Cord_Y": "75.77969"
        },
        {
            "State": "Angul",
            "Cases": "624",
            "Deaths": "6",
            "Recoveries": "395",
            "Active": "225",
            "Cord_X": "20.838243",
            "Cord_Y": "85.097395"
        },
        {
            "State": "Balangir",
            "Cases": "1311",
            "Deaths": "24",
            "Recoveries": "767",
            "Active": "542",
            "Cord_X": "20.70499",
            "Cord_Y": "83.48629"
        },
        {
            "State": "Balasore",
            "Cases": "2745",
            "Deaths": "30",
            "Recoveries": "1639",
            "Active": "1093",
            "Cord_X": "21.50171",
            "Cord_Y": "86.921671"
        },
        {
            "State": "Baragarh",
            "Cases": "1202",
            "Deaths": "13",
            "Recoveries": "711",
            "Active": "486",
            "Cord_X": "22.95357",
            "Cord_Y": "76.05005"
        },
        {
            "State": "Bhadrak",
            "Cases": "2006",
            "Deaths": "14",
            "Recoveries": "1009",
            "Active": "987",
            "Cord_X": "21.063329",
            "Cord_Y": "86.505373"
        },
        {
            "State": "Boudh",
            "Cases": "516",
            "Deaths": "1",
            "Recoveries": "226",
            "Active": "290",
            "Cord_X": "20.84445",
            "Cord_Y": "84.30723"
        },
        {
            "State": "Cuttack",
            "Cases": "5174",
            "Deaths": "74",
            "Recoveries": "3268",
            "Active": "1880",
            "Cord_X": "20.4686",
            "Cord_Y": "85.8792"
        },
        {
            "State": "Deogarh",
            "Cases": "142",
            "Deaths": "0",
            "Recoveries": "118",
            "Active": "24",
            "Cord_X": "21.530811",
            "Cord_Y": "84.724582"
        },
        {
            "State": "Dhenkanal",
            "Cases": "1155",
            "Deaths": "6",
            "Recoveries": "803",
            "Active": "350",
            "Cord_X": "20.75",
            "Cord_Y": "85.5"
        },
        {
            "State": "Gajapati",
            "Cases": "2608",
            "Deaths": "23",
            "Recoveries": "2178",
            "Active": "413",
            "Cord_X": "20.29747",
            "Cord_Y": "85.82522"
        },
        {
            "State": "Ganjam",
            "Cases": "16078",
            "Deaths": "220",
            "Recoveries": "13963",
            "Active": "1936",
            "Cord_X": "19.388602",
            "Cord_Y": "85.049464"
        },
        {
            "State": "Jagatsinghpur",
            "Cases": "1287",
            "Deaths": "10",
            "Recoveries": "933",
            "Active": "352",
            "Cord_X": "20.04251",
            "Cord_Y": "86.13796"
        },
        {
            "State": "Jajpur",
            "Cases": "2579",
            "Deaths": "10",
            "Recoveries": "1870",
            "Active": "704",
            "Cord_X": "20.85227",
            "Cord_Y": "86.338571"
        },
        {
            "State": "Jharsuguda",
            "Cases": "768",
            "Deaths": "2",
            "Recoveries": "488",
            "Active": "279",
            "Cord_X": "21.865363",
            "Cord_Y": "84.023966"
        },
        {
            "State": "Kalahandi",
            "Cases": "1050",
            "Deaths": "11",
            "Recoveries": "596",
            "Active": "452",
            "Cord_X": "19.2509",
            "Cord_Y": "83.42049"
        },
        {
            "State": "Kandhamal",
            "Cases": "1778",
            "Deaths": "23",
            "Recoveries": "1197",
            "Active": "574",
            "Cord_X": "20.128953",
            "Cord_Y": "84.072102"
        },
        {
            "State": "Kendrapara",
            "Cases": "1113",
            "Deaths": "11",
            "Recoveries": "734",
            "Active": "375",
            "Cord_X": "20.504209",
            "Cord_Y": "86.415994"
        },
        {
            "State": "Keonjhar",
            "Cases": "1398",
            "Deaths": "10",
            "Recoveries": "1125",
            "Active": "266",
            "Cord_X": "21.5",
            "Cord_Y": "85.5"
        },
        {
            "State": "Khordha",
            "Cases": "11288",
            "Deaths": "144",
            "Recoveries": "6241",
            "Active": "4983",
            "Cord_X": "20.174789",
            "Cord_Y": "85.621689"
        },
        {
            "State": "Koraput",
            "Cases": "2444",
            "Deaths": "10",
            "Recoveries": "1447",
            "Active": "994",
            "Cord_X": "18.811109",
            "Cord_Y": "82.720614"
        },
        {
            "State": "Malkangiri",
            "Cases": "1695",
            "Deaths": "11",
            "Recoveries": "1064",
            "Active": "624",
            "Cord_X": "18.36427",
            "Cord_Y": "81.89306"
        },
        {
            "State": "Mayurbhanj",
            "Cases": "2001",
            "Deaths": "23",
            "Recoveries": "1039",
            "Active": "956",
            "Cord_X": "22.52938",
            "Cord_Y": "88.32244"
        },
        {
            "State": "Nawarangpur",
            "Cases": "733",
            "Deaths": "5",
            "Recoveries": "453",
            "Active": "277",
            "Cord_X": "19.1296",
            "Cord_Y": "82.61451"
        },
        {
            "State": "Nayagarh",
            "Cases": "2041",
            "Deaths": "28",
            "Recoveries": "1162",
            "Active": "867",
            "Cord_X": "20.1269",
            "Cord_Y": "85.1047"
        },
        {
            "State": "Nuapada",
            "Cases": "304",
            "Deaths": "1",
            "Recoveries": "292",
            "Active": "12",
            "Cord_X": "20.80778",
            "Cord_Y": "82.5341"
        },
        {
            "State": "Puri",
            "Cases": "2435",
            "Deaths": "57",
            "Recoveries": "1384",
            "Active": "1038",
            "Cord_X": "19.807608",
            "Cord_Y": "85.825254"
        },
        {
            "State": "Rayagada",
            "Cases": "2963",
            "Deaths": "38",
            "Recoveries": "1635",
            "Active": "1310",
            "Cord_X": "19.1696",
            "Cord_Y": "83.418"
        },
        {
            "State": "Sambalpur",
            "Cases": "1900",
            "Deaths": "22",
            "Recoveries": "1065",
            "Active": "827",
            "Cord_X": "21.470539",
            "Cord_Y": "83.976151"
        },
        {
            "State": "Sonepur",
            "Cases": "461",
            "Deaths": "8",
            "Recoveries": "194",
            "Active": "265",
            "Cord_X": "20.845386",
            "Cord_Y": "83.909083"
        },
        {
            "State": "Sundergarh",
            "Cases": "3738",
            "Deaths": "40",
            "Recoveries": "2508",
            "Active": "1200",
            "Cord_X": "22.1194",
            "Cord_Y": "84.0381"
        },
        {
            "State": "NDRF-ODRAF-Fire Service",
            "Cases": "295",
            "Deaths": "0",
            "Recoveries": "0",
            "Active": "295",
            "Cord_X": "23.16029",
            "Cord_Y": "72.63614"
        },
        {
            "State": "Alipurduar",
            "Cases": "4705",
            "Deaths": "53",
            "Recoveries": "4177",
            "Active": "475",
            "Cord_X": "26.485157",
            "Cord_Y": "89.524693"
        },
        {
            "State": "Bankura",
            "Cases": "5595",
            "Deaths": "57",
            "Recoveries": "4944",
            "Active": "594",
            "Cord_X": "23.235089",
            "Cord_Y": "87.065942"
        },
        {
            "State": "Birbhum",
            "Cases": "3964",
            "Deaths": "31",
            "Recoveries": "3408",
            "Active": "525",
            "Cord_X": "24",
            "Cord_Y": "87.583333"
        },
        {
            "State": "Cooch Behar",
            "Cases": "5854",
            "Deaths": "39",
            "Recoveries": "5136",
            "Active": "679",
            "Cord_X": "26.32237",
            "Cord_Y": "89.459245"
        },
        {
            "State": "Dakshin Dinajpur",
            "Cases": "5407",
            "Deaths": "34",
            "Recoveries": "4988",
            "Active": "385",
            "Cord_X": "25.24405",
            "Cord_Y": "88.78438"
        },
        {
            "State": "Darjeeling",
            "Cases": "7968",
            "Deaths": "110",
            "Recoveries": "7201",
            "Active": "657",
            "Cord_X": "27.038372",
            "Cord_Y": "88.261754"
        },
        {
            "State": "Hooghly",
            "Cases": "12947",
            "Deaths": "223",
            "Recoveries": "11529",
            "Active": "1195",
            "Cord_X": "22.91216",
            "Cord_Y": "88.36368"
        },
        {
            "State": "Howrah",
            "Cases": "18492",
            "Deaths": "570",
            "Recoveries": "16532",
            "Active": "1390",
            "Cord_X": "22.588222",
            "Cord_Y": "88.323139"
        },
        {
            "State": "Jalpaiguri",
            "Cases": "6102",
            "Deaths": "59",
            "Recoveries": "5541",
            "Active": "502",
            "Cord_X": "26.524299",
            "Cord_Y": "88.720022"
        },
        {
            "State": "Jhargram",
            "Cases": "824",
            "Deaths": "9",
            "Recoveries": "628",
            "Active": "187",
            "Cord_X": "22.450942",
            "Cord_Y": "86.995367"
        },
        {
            "State": "Kalimpong",
            "Cases": "991",
            "Deaths": "7",
            "Recoveries": "830",
            "Active": "154",
            "Cord_X": "27.07169",
            "Cord_Y": "88.4729"
        },
        {
            "State": "Kolkata",
            "Cases": "57081",
            "Deaths": "1721",
            "Recoveries": "49984",
            "Active": "5376",
            "Cord_X": "22.568746",
            "Cord_Y": "88.3463"
        },
        {
            "State": "Malda",
            "Cases": "6856",
            "Deaths": "56",
            "Recoveries": "6303",
            "Active": "497",
            "Cord_X": "41.550457",
            "Cord_Y": "1.040633"
        },
        {
            "State": "Murshidabad",
            "Cases": "5978",
            "Deaths": "63",
            "Recoveries": "5236",
            "Active": "679",
            "Cord_X": "24.174599",
            "Cord_Y": "88.272134"
        },
        {
            "State": "Nadia",
            "Cases": "7453",
            "Deaths": "97",
            "Recoveries": "6399",
            "Active": "957",
            "Cord_X": "23.25",
            "Cord_Y": "88.5"
        },
        {
            "State": "North 24 Parganas",
            "Cases": "52145",
            "Deaths": "1121",
            "Recoveries": "45294",
            "Active": "5730",
            "Cord_X": "43.190399",
            "Cord_Y": "80.281839"
        },
        {
            "State": "Paschim Bardhaman",
            "Cases": "7216",
            "Deaths": "67",
            "Recoveries": "6361",
            "Active": "788",
            "Cord_X": "23.22428",
            "Cord_Y": "87.85671"
        },
        {
            "State": "Paschim Medinipur",
            "Cases": "9916",
            "Deaths": "137",
            "Recoveries": "8654",
            "Active": "1125",
            "Cord_X": "22.5625",
            "Cord_Y": "87.46725"
        },
        {
            "State": "Purba Bardhaman",
            "Cases": "5016",
            "Deaths": "53",
            "Recoveries": "4380",
            "Active": "583",
            "Cord_X": "49.785833",
            "Cord_Y": "3.546667"
        },
        {
            "State": "Purba Medinipur",
            "Cases": "10888",
            "Deaths": "130",
            "Recoveries": "9672",
            "Active": "1086",
            "Cord_X": "21.916753",
            "Cord_Y": "87.742318"
        },
        {
            "State": "Purulia",
            "Cases": "3560",
            "Deaths": "18",
            "Recoveries": "2915",
            "Active": "627",
            "Cord_X": "23.329188",
            "Cord_Y": "86.367238"
        },
        {
            "State": "South 24 Parganas",
            "Cases": "17628",
            "Deaths": "323",
            "Recoveries": "15377",
            "Active": "1928",
            "Cord_X": "22",
            "Cord_Y": "88"
        },
        {
            "State": "Uttar Dinajpur",
            "Cases": "3672",
            "Deaths": "36",
            "Recoveries": "3203",
            "Active": "433",
            "Cord_X": "25.390897",
            "Cord_Y": "87.066067"
        }
        
    ]

   for(var i=0;i<stateData.length;i++)
{

    var circle = L.circle([stateData[i].Cord_X, stateData[i].Cord_Y], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: (parseFloat(stateData[i][document.getElementById("criteria").value.split(",")[0]])/parseInt(document.getElementById("criteria").value.split(",")[1]))*window.val2
    //stateData[i].cases/6211672
}).addTo(mymap);
circle.bindPopup("<b>"+stateData[i].State+"</b><br>Cases:"+stateData[i].Cases+"<br>Active:"+stateData[i].Active+"<br>Recovered:"+stateData[i].Recoveries+"<br>Deaths:"+stateData[i].Deaths);




}


}







function clearMap() {
    for(i in mymap._layers) {
        if(mymap._layers[i]._path != undefined) {
            try {
                mymap.removeLayer(mymap._layers[i]);
            }
            catch(e) {
                console.log("problem with " + e +mymap._layers[i]);
            }
        }
    }
}








mymap.on("zoom",()=>{

    if(mymap._zoom<7){clearMap();changeToState();}
    else{clearMap();changeToDistrict();}

})

function setMap(){

    if(mymap._zoom<7){clearMap();changeToState();}
    else{clearMap();changeToDistrict();}
}


  