/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 1155.0, "minX": 0.0, "maxY": 2663.0, "series": [{"data": [[0.0, 1155.0], [0.1, 1155.0], [0.2, 1155.0], [0.3, 1155.0], [0.4, 1155.0], [0.5, 1169.0], [0.6, 1169.0], [0.7, 1169.0], [0.8, 1169.0], [0.9, 1169.0], [1.0, 1181.0], [1.1, 1181.0], [1.2, 1181.0], [1.3, 1181.0], [1.4, 1183.0], [1.5, 1183.0], [1.6, 1183.0], [1.7, 1183.0], [1.8, 1183.0], [1.9, 1186.0], [2.0, 1186.0], [2.1, 1186.0], [2.2, 1186.0], [2.3, 1186.0], [2.4, 1187.0], [2.5, 1187.0], [2.6, 1187.0], [2.7, 1187.0], [2.8, 1187.0], [2.9, 1187.0], [3.0, 1187.0], [3.1, 1187.0], [3.2, 1187.0], [3.3, 1189.0], [3.4, 1189.0], [3.5, 1189.0], [3.6, 1189.0], [3.7, 1189.0], [3.8, 1194.0], [3.9, 1194.0], [4.0, 1194.0], [4.1, 1194.0], [4.2, 1200.0], [4.3, 1200.0], [4.4, 1200.0], [4.5, 1200.0], [4.6, 1200.0], [4.7, 1215.0], [4.8, 1215.0], [4.9, 1215.0], [5.0, 1215.0], [5.1, 1215.0], [5.2, 1215.0], [5.3, 1215.0], [5.4, 1215.0], [5.5, 1215.0], [5.6, 1217.0], [5.7, 1217.0], [5.8, 1217.0], [5.9, 1217.0], [6.0, 1217.0], [6.1, 1219.0], [6.2, 1219.0], [6.3, 1219.0], [6.4, 1219.0], [6.5, 1225.0], [6.6, 1225.0], [6.7, 1225.0], [6.8, 1225.0], [6.9, 1225.0], [7.0, 1227.0], [7.1, 1227.0], [7.2, 1227.0], [7.3, 1227.0], [7.4, 1227.0], [7.5, 1233.0], [7.6, 1233.0], [7.7, 1233.0], [7.8, 1233.0], [7.9, 1234.0], [8.0, 1234.0], [8.1, 1234.0], [8.2, 1234.0], [8.3, 1234.0], [8.4, 1246.0], [8.5, 1246.0], [8.6, 1246.0], [8.7, 1246.0], [8.8, 1246.0], [8.9, 1246.0], [9.0, 1246.0], [9.1, 1246.0], [9.2, 1246.0], [9.3, 1250.0], [9.4, 1250.0], [9.5, 1250.0], [9.6, 1250.0], [9.7, 1250.0], [9.8, 1255.0], [9.9, 1255.0], [10.0, 1255.0], [10.1, 1255.0], [10.2, 1274.0], [10.3, 1274.0], [10.4, 1274.0], [10.5, 1274.0], [10.6, 1274.0], [10.7, 1278.0], [10.8, 1278.0], [10.9, 1278.0], [11.0, 1278.0], [11.1, 1278.0], [11.2, 1279.0], [11.3, 1279.0], [11.4, 1279.0], [11.5, 1279.0], [11.6, 1279.0], [11.7, 1279.0], [11.8, 1279.0], [11.9, 1279.0], [12.0, 1279.0], [12.1, 1280.0], [12.2, 1280.0], [12.3, 1280.0], [12.4, 1280.0], [12.5, 1280.0], [12.6, 1283.0], [12.7, 1283.0], [12.8, 1283.0], [12.9, 1283.0], [13.0, 1283.0], [13.1, 1283.0], [13.2, 1283.0], [13.3, 1283.0], [13.4, 1283.0], [13.5, 1283.0], [13.6, 1283.0], [13.7, 1283.0], [13.8, 1283.0], [13.9, 1291.0], [14.0, 1291.0], [14.1, 1291.0], [14.2, 1291.0], [14.3, 1291.0], [14.4, 1292.0], [14.5, 1292.0], [14.6, 1292.0], [14.7, 1292.0], [14.8, 1292.0], [14.9, 1295.0], [15.0, 1295.0], [15.1, 1295.0], [15.2, 1295.0], [15.3, 1295.0], [15.4, 1295.0], [15.5, 1295.0], [15.6, 1295.0], [15.7, 1295.0], [15.8, 1298.0], [15.9, 1298.0], [16.0, 1298.0], [16.1, 1298.0], [16.2, 1298.0], [16.3, 1299.0], [16.4, 1299.0], [16.5, 1299.0], [16.6, 1299.0], [16.7, 1306.0], [16.8, 1306.0], [16.9, 1306.0], [17.0, 1306.0], [17.1, 1306.0], [17.2, 1307.0], [17.3, 1307.0], [17.4, 1307.0], [17.5, 1307.0], [17.6, 1310.0], [17.7, 1310.0], [17.8, 1310.0], [17.9, 1310.0], [18.0, 1310.0], [18.1, 1311.0], [18.2, 1311.0], [18.3, 1311.0], [18.4, 1311.0], [18.5, 1311.0], [18.6, 1311.0], [18.7, 1311.0], [18.8, 1311.0], [18.9, 1311.0], [19.0, 1312.0], [19.1, 1312.0], [19.2, 1312.0], [19.3, 1312.0], [19.4, 1312.0], [19.5, 1312.0], [19.6, 1312.0], [19.7, 1312.0], [19.8, 1312.0], [19.9, 1312.0], [20.0, 1312.0], [20.1, 1312.0], [20.2, 1312.0], [20.3, 1312.0], [20.4, 1312.0], [20.5, 1312.0], [20.6, 1312.0], [20.7, 1312.0], [20.8, 1312.0], [20.9, 1312.0], [21.0, 1312.0], [21.1, 1312.0], [21.2, 1312.0], [21.3, 1313.0], [21.4, 1313.0], [21.5, 1313.0], [21.6, 1313.0], [21.7, 1313.0], [21.8, 1314.0], [21.9, 1314.0], [22.0, 1314.0], [22.1, 1314.0], [22.2, 1314.0], [22.3, 1315.0], [22.4, 1315.0], [22.5, 1315.0], [22.6, 1315.0], [22.7, 1316.0], [22.8, 1316.0], [22.9, 1316.0], [23.0, 1316.0], [23.1, 1316.0], [23.2, 1317.0], [23.3, 1317.0], [23.4, 1317.0], [23.5, 1317.0], [23.6, 1317.0], [23.7, 1317.0], [23.8, 1317.0], [23.9, 1317.0], [24.0, 1317.0], [24.1, 1317.0], [24.2, 1317.0], [24.3, 1317.0], [24.4, 1317.0], [24.5, 1317.0], [24.6, 1318.0], [24.7, 1318.0], [24.8, 1318.0], [24.9, 1318.0], [25.0, 1318.0], [25.1, 1318.0], [25.2, 1318.0], [25.3, 1318.0], [25.4, 1318.0], [25.5, 1318.0], [25.6, 1318.0], [25.7, 1318.0], [25.8, 1318.0], [25.9, 1318.0], [26.0, 1319.0], [26.1, 1319.0], [26.2, 1319.0], [26.3, 1319.0], [26.4, 1319.0], [26.5, 1319.0], [26.6, 1319.0], [26.7, 1319.0], [26.8, 1319.0], [26.9, 1320.0], [27.0, 1320.0], [27.1, 1320.0], [27.2, 1320.0], [27.3, 1320.0], [27.4, 1321.0], [27.5, 1321.0], [27.6, 1321.0], [27.7, 1321.0], [27.8, 1323.0], [27.9, 1323.0], [28.0, 1323.0], [28.1, 1323.0], [28.2, 1323.0], [28.3, 1323.0], [28.4, 1323.0], [28.5, 1323.0], [28.6, 1323.0], [28.7, 1323.0], [28.8, 1323.0], [28.9, 1323.0], [29.0, 1323.0], [29.1, 1323.0], [29.2, 1324.0], [29.3, 1324.0], [29.4, 1324.0], [29.5, 1324.0], [29.6, 1324.0], [29.7, 1324.0], [29.8, 1324.0], [29.9, 1324.0], [30.0, 1324.0], [30.1, 1325.0], [30.2, 1325.0], [30.3, 1325.0], [30.4, 1325.0], [30.5, 1325.0], [30.6, 1326.0], [30.7, 1326.0], [30.8, 1326.0], [30.9, 1326.0], [31.0, 1326.0], [31.1, 1328.0], [31.2, 1328.0], [31.3, 1328.0], [31.4, 1328.0], [31.5, 1328.0], [31.6, 1328.0], [31.7, 1328.0], [31.8, 1328.0], [31.9, 1328.0], [32.0, 1329.0], [32.1, 1329.0], [32.2, 1329.0], [32.3, 1329.0], [32.4, 1329.0], [32.5, 1329.0], [32.6, 1329.0], [32.7, 1329.0], [32.8, 1329.0], [32.9, 1329.0], [33.0, 1329.0], [33.1, 1329.0], [33.2, 1329.0], [33.3, 1329.0], [33.4, 1330.0], [33.5, 1330.0], [33.6, 1330.0], [33.7, 1330.0], [33.8, 1333.0], [33.9, 1333.0], [34.0, 1333.0], [34.1, 1333.0], [34.2, 1333.0], [34.3, 1334.0], [34.4, 1334.0], [34.5, 1334.0], [34.6, 1334.0], [34.7, 1334.0], [34.8, 1334.0], [34.9, 1334.0], [35.0, 1334.0], [35.1, 1334.0], [35.2, 1334.0], [35.3, 1334.0], [35.4, 1334.0], [35.5, 1334.0], [35.6, 1334.0], [35.7, 1335.0], [35.8, 1335.0], [35.9, 1335.0], [36.0, 1335.0], [36.1, 1335.0], [36.2, 1337.0], [36.3, 1337.0], [36.4, 1337.0], [36.5, 1337.0], [36.6, 1337.0], [36.7, 1337.0], [36.8, 1337.0], [36.9, 1337.0], [37.0, 1337.0], [37.1, 1337.0], [37.2, 1337.0], [37.3, 1337.0], [37.4, 1337.0], [37.5, 1338.0], [37.6, 1338.0], [37.7, 1338.0], [37.8, 1338.0], [37.9, 1338.0], [38.0, 1338.0], [38.1, 1338.0], [38.2, 1338.0], [38.3, 1338.0], [38.4, 1338.0], [38.5, 1338.0], [38.6, 1338.0], [38.7, 1338.0], [38.8, 1338.0], [38.9, 1338.0], [39.0, 1338.0], [39.1, 1338.0], [39.2, 1338.0], [39.3, 1338.0], [39.4, 1338.0], [39.5, 1338.0], [39.6, 1338.0], [39.7, 1338.0], [39.8, 1338.0], [39.9, 1339.0], [40.0, 1339.0], [40.1, 1339.0], [40.2, 1339.0], [40.3, 1340.0], [40.4, 1340.0], [40.5, 1340.0], [40.6, 1340.0], [40.7, 1340.0], [40.8, 1340.0], [40.9, 1340.0], [41.0, 1340.0], [41.1, 1340.0], [41.2, 1340.0], [41.3, 1340.0], [41.4, 1340.0], [41.5, 1340.0], [41.6, 1340.0], [41.7, 1341.0], [41.8, 1341.0], [41.9, 1341.0], [42.0, 1341.0], [42.1, 1341.0], [42.2, 1341.0], [42.3, 1341.0], [42.4, 1341.0], [42.5, 1341.0], [42.6, 1341.0], [42.7, 1341.0], [42.8, 1341.0], [42.9, 1341.0], [43.0, 1341.0], [43.1, 1341.0], [43.2, 1341.0], [43.3, 1341.0], [43.4, 1341.0], [43.5, 1341.0], [43.6, 1342.0], [43.7, 1342.0], [43.8, 1342.0], [43.9, 1342.0], [44.0, 1342.0], [44.1, 1342.0], [44.2, 1342.0], [44.3, 1342.0], [44.4, 1342.0], [44.5, 1342.0], [44.6, 1342.0], [44.7, 1342.0], [44.8, 1342.0], [44.9, 1342.0], [45.0, 1342.0], [45.1, 1342.0], [45.2, 1342.0], [45.3, 1342.0], [45.4, 1342.0], [45.5, 1342.0], [45.6, 1342.0], [45.7, 1342.0], [45.8, 1342.0], [45.9, 1343.0], [46.0, 1343.0], [46.1, 1343.0], [46.2, 1343.0], [46.3, 1343.0], [46.4, 1343.0], [46.5, 1343.0], [46.6, 1343.0], [46.7, 1343.0], [46.8, 1343.0], [46.9, 1343.0], [47.0, 1343.0], [47.1, 1343.0], [47.2, 1343.0], [47.3, 1343.0], [47.4, 1343.0], [47.5, 1343.0], [47.6, 1343.0], [47.7, 1343.0], [47.8, 1343.0], [47.9, 1343.0], [48.0, 1343.0], [48.1, 1343.0], [48.2, 1343.0], [48.3, 1343.0], [48.4, 1343.0], [48.5, 1343.0], [48.6, 1343.0], [48.7, 1343.0], [48.8, 1343.0], [48.9, 1343.0], [49.0, 1343.0], [49.1, 1343.0], [49.2, 1343.0], [49.3, 1343.0], [49.4, 1343.0], [49.5, 1343.0], [49.6, 1344.0], [49.7, 1344.0], [49.8, 1344.0], [49.9, 1344.0], [50.0, 1345.0], [50.1, 1345.0], [50.2, 1345.0], [50.3, 1345.0], [50.4, 1345.0], [50.5, 1345.0], [50.6, 1345.0], [50.7, 1345.0], [50.8, 1345.0], [50.9, 1345.0], [51.0, 1346.0], [51.1, 1346.0], [51.2, 1346.0], [51.3, 1346.0], [51.4, 1346.0], [51.5, 1346.0], [51.6, 1346.0], [51.7, 1346.0], [51.8, 1346.0], [51.9, 1348.0], [52.0, 1348.0], [52.1, 1348.0], [52.2, 1348.0], [52.3, 1348.0], [52.4, 1352.0], [52.5, 1352.0], [52.6, 1352.0], [52.7, 1352.0], [52.8, 1352.0], [52.9, 1352.0], [53.0, 1352.0], [53.1, 1352.0], [53.2, 1352.0], [53.3, 1362.0], [53.4, 1362.0], [53.5, 1362.0], [53.6, 1362.0], [53.7, 1362.0], [53.8, 1371.0], [53.9, 1371.0], [54.0, 1371.0], [54.1, 1371.0], [54.2, 1373.0], [54.3, 1373.0], [54.4, 1373.0], [54.5, 1373.0], [54.6, 1373.0], [54.7, 1374.0], [54.8, 1374.0], [54.9, 1374.0], [55.0, 1374.0], [55.1, 1374.0], [55.2, 1374.0], [55.3, 1374.0], [55.4, 1374.0], [55.5, 1374.0], [55.6, 1377.0], [55.7, 1377.0], [55.8, 1377.0], [55.9, 1377.0], [56.0, 1377.0], [56.1, 1377.0], [56.2, 1377.0], [56.3, 1377.0], [56.4, 1377.0], [56.5, 1382.0], [56.6, 1382.0], [56.7, 1382.0], [56.8, 1382.0], [56.9, 1382.0], [57.0, 1383.0], [57.1, 1383.0], [57.2, 1383.0], [57.3, 1383.0], [57.4, 1383.0], [57.5, 1386.0], [57.6, 1386.0], [57.7, 1386.0], [57.8, 1386.0], [57.9, 1394.0], [58.0, 1394.0], [58.1, 1394.0], [58.2, 1394.0], [58.3, 1394.0], [58.4, 1402.0], [58.5, 1402.0], [58.6, 1402.0], [58.7, 1402.0], [58.8, 1404.0], [58.9, 1404.0], [59.0, 1404.0], [59.1, 1404.0], [59.2, 1404.0], [59.3, 1404.0], [59.4, 1404.0], [59.5, 1404.0], [59.6, 1404.0], [59.7, 1404.0], [59.8, 1404.0], [59.9, 1404.0], [60.0, 1404.0], [60.1, 1404.0], [60.2, 1405.0], [60.3, 1405.0], [60.4, 1405.0], [60.5, 1405.0], [60.6, 1405.0], [60.7, 1405.0], [60.8, 1405.0], [60.9, 1405.0], [61.0, 1405.0], [61.1, 1405.0], [61.2, 1406.0], [61.3, 1406.0], [61.4, 1406.0], [61.5, 1406.0], [61.6, 1407.0], [61.7, 1407.0], [61.8, 1407.0], [61.9, 1407.0], [62.0, 1407.0], [62.1, 1408.0], [62.2, 1408.0], [62.3, 1408.0], [62.4, 1408.0], [62.5, 1410.0], [62.6, 1410.0], [62.7, 1410.0], [62.8, 1410.0], [62.9, 1410.0], [63.0, 1412.0], [63.1, 1412.0], [63.2, 1412.0], [63.3, 1412.0], [63.4, 1412.0], [63.5, 1413.0], [63.6, 1413.0], [63.7, 1413.0], [63.8, 1413.0], [63.9, 1415.0], [64.0, 1415.0], [64.1, 1415.0], [64.2, 1415.0], [64.3, 1415.0], [64.4, 1418.0], [64.5, 1418.0], [64.6, 1418.0], [64.7, 1418.0], [64.8, 1418.0], [64.9, 1421.0], [65.0, 1421.0], [65.1, 1421.0], [65.2, 1421.0], [65.3, 1424.0], [65.4, 1424.0], [65.5, 1424.0], [65.6, 1424.0], [65.7, 1424.0], [65.8, 1427.0], [65.9, 1427.0], [66.0, 1427.0], [66.1, 1427.0], [66.2, 1427.0], [66.3, 1428.0], [66.4, 1428.0], [66.5, 1428.0], [66.6, 1428.0], [66.7, 1429.0], [66.8, 1429.0], [66.9, 1429.0], [67.0, 1429.0], [67.1, 1429.0], [67.2, 1430.0], [67.3, 1430.0], [67.4, 1430.0], [67.5, 1430.0], [67.6, 1431.0], [67.7, 1431.0], [67.8, 1431.0], [67.9, 1431.0], [68.0, 1431.0], [68.1, 1431.0], [68.2, 1431.0], [68.3, 1431.0], [68.4, 1431.0], [68.5, 1431.0], [68.6, 1432.0], [68.7, 1432.0], [68.8, 1432.0], [68.9, 1432.0], [69.0, 1433.0], [69.1, 1433.0], [69.2, 1433.0], [69.3, 1433.0], [69.4, 1433.0], [69.5, 1433.0], [69.6, 1433.0], [69.7, 1433.0], [69.8, 1433.0], [69.9, 1433.0], [70.0, 1435.0], [70.1, 1435.0], [70.2, 1435.0], [70.3, 1435.0], [70.4, 1435.0], [70.5, 1435.0], [70.6, 1435.0], [70.7, 1435.0], [70.8, 1435.0], [70.9, 1435.0], [71.0, 1435.0], [71.1, 1435.0], [71.2, 1435.0], [71.3, 1435.0], [71.4, 1435.0], [71.5, 1435.0], [71.6, 1435.0], [71.7, 1435.0], [71.8, 1435.0], [71.9, 1435.0], [72.0, 1435.0], [72.1, 1435.0], [72.2, 1435.0], [72.3, 1435.0], [72.4, 1435.0], [72.5, 1435.0], [72.6, 1435.0], [72.7, 1435.0], [72.8, 1435.0], [72.9, 1435.0], [73.0, 1435.0], [73.1, 1435.0], [73.2, 1436.0], [73.3, 1436.0], [73.4, 1436.0], [73.5, 1436.0], [73.6, 1436.0], [73.7, 1436.0], [73.8, 1436.0], [73.9, 1436.0], [74.0, 1436.0], [74.1, 1436.0], [74.2, 1436.0], [74.3, 1436.0], [74.4, 1436.0], [74.5, 1436.0], [74.6, 1436.0], [74.7, 1436.0], [74.8, 1436.0], [74.9, 1436.0], [75.0, 1436.0], [75.1, 1436.0], [75.2, 1436.0], [75.3, 1436.0], [75.4, 1436.0], [75.5, 1436.0], [75.6, 1436.0], [75.7, 1436.0], [75.8, 1436.0], [75.9, 1436.0], [76.0, 1436.0], [76.1, 1436.0], [76.2, 1436.0], [76.3, 1436.0], [76.4, 1437.0], [76.5, 1437.0], [76.6, 1437.0], [76.7, 1437.0], [76.8, 1437.0], [76.9, 1437.0], [77.0, 1437.0], [77.1, 1437.0], [77.2, 1437.0], [77.3, 1437.0], [77.4, 1437.0], [77.5, 1437.0], [77.6, 1437.0], [77.7, 1437.0], [77.8, 1437.0], [77.9, 1437.0], [78.0, 1437.0], [78.1, 1437.0], [78.2, 1437.0], [78.3, 1437.0], [78.4, 1437.0], [78.5, 1437.0], [78.6, 1437.0], [78.7, 1437.0], [78.8, 1437.0], [78.9, 1437.0], [79.0, 1437.0], [79.1, 1437.0], [79.2, 1437.0], [79.3, 1437.0], [79.4, 1437.0], [79.5, 1437.0], [79.6, 1437.0], [79.7, 1437.0], [79.8, 1437.0], [79.9, 1437.0], [80.0, 1437.0], [80.1, 1438.0], [80.2, 1438.0], [80.3, 1438.0], [80.4, 1438.0], [80.5, 1438.0], [80.6, 1438.0], [80.7, 1438.0], [80.8, 1438.0], [80.9, 1438.0], [81.0, 1438.0], [81.1, 1442.0], [81.2, 1442.0], [81.3, 1442.0], [81.4, 1442.0], [81.5, 1443.0], [81.6, 1443.0], [81.7, 1443.0], [81.8, 1443.0], [81.9, 1443.0], [82.0, 1445.0], [82.1, 1445.0], [82.2, 1445.0], [82.3, 1445.0], [82.4, 1445.0], [82.5, 1448.0], [82.6, 1448.0], [82.7, 1448.0], [82.8, 1448.0], [82.9, 1449.0], [83.0, 1449.0], [83.1, 1449.0], [83.2, 1449.0], [83.3, 1449.0], [83.4, 1453.0], [83.5, 1453.0], [83.6, 1453.0], [83.7, 1453.0], [83.8, 1459.0], [83.9, 1459.0], [84.0, 1459.0], [84.1, 1459.0], [84.2, 1459.0], [84.3, 1462.0], [84.4, 1462.0], [84.5, 1462.0], [84.6, 1462.0], [84.7, 1462.0], [84.8, 1463.0], [84.9, 1463.0], [85.0, 1463.0], [85.1, 1463.0], [85.2, 1463.0], [85.3, 1463.0], [85.4, 1463.0], [85.5, 1463.0], [85.6, 1463.0], [85.7, 1463.0], [85.8, 1463.0], [85.9, 1463.0], [86.0, 1463.0], [86.1, 1463.0], [86.2, 1466.0], [86.3, 1466.0], [86.4, 1466.0], [86.5, 1466.0], [86.6, 1466.0], [86.7, 1466.0], [86.8, 1466.0], [86.9, 1466.0], [87.0, 1466.0], [87.1, 1467.0], [87.2, 1467.0], [87.3, 1467.0], [87.4, 1467.0], [87.5, 1467.0], [87.6, 1467.0], [87.7, 1467.0], [87.8, 1467.0], [87.9, 1467.0], [88.0, 1469.0], [88.1, 1469.0], [88.2, 1469.0], [88.3, 1469.0], [88.4, 1469.0], [88.5, 1470.0], [88.6, 1470.0], [88.7, 1470.0], [88.8, 1470.0], [88.9, 1477.0], [89.0, 1477.0], [89.1, 1477.0], [89.2, 1477.0], [89.3, 1477.0], [89.4, 1481.0], [89.5, 1481.0], [89.6, 1481.0], [89.7, 1481.0], [89.8, 1481.0], [89.9, 1486.0], [90.0, 1486.0], [90.1, 1486.0], [90.2, 1486.0], [90.3, 1516.0], [90.4, 1516.0], [90.5, 1516.0], [90.6, 1516.0], [90.7, 1516.0], [90.8, 1519.0], [90.9, 1519.0], [91.0, 1519.0], [91.1, 1519.0], [91.2, 1519.0], [91.3, 1520.0], [91.4, 1520.0], [91.5, 1520.0], [91.6, 1520.0], [91.7, 1523.0], [91.8, 1523.0], [91.9, 1523.0], [92.0, 1523.0], [92.1, 1523.0], [92.2, 1525.0], [92.3, 1525.0], [92.4, 1525.0], [92.5, 1525.0], [92.6, 1530.0], [92.7, 1530.0], [92.8, 1530.0], [92.9, 1530.0], [93.0, 1530.0], [93.1, 1531.0], [93.2, 1531.0], [93.3, 1531.0], [93.4, 1531.0], [93.5, 1531.0], [93.6, 1531.0], [93.7, 1531.0], [93.8, 1531.0], [93.9, 1531.0], [94.0, 1532.0], [94.1, 1532.0], [94.2, 1532.0], [94.3, 1532.0], [94.4, 1532.0], [94.5, 1543.0], [94.6, 1543.0], [94.7, 1543.0], [94.8, 1543.0], [94.9, 1543.0], [95.0, 1582.0], [95.1, 1582.0], [95.2, 1582.0], [95.3, 1582.0], [95.4, 1591.0], [95.5, 1591.0], [95.6, 1591.0], [95.7, 1591.0], [95.8, 1591.0], [95.9, 1598.0], [96.0, 1598.0], [96.1, 1598.0], [96.2, 1598.0], [96.3, 1655.0], [96.4, 1655.0], [96.5, 1655.0], [96.6, 1655.0], [96.7, 1655.0], [96.8, 1659.0], [96.9, 1659.0], [97.0, 1659.0], [97.1, 1659.0], [97.2, 1659.0], [97.3, 1810.0], [97.4, 1810.0], [97.5, 1810.0], [97.6, 1810.0], [97.7, 1873.0], [97.8, 1873.0], [97.9, 1873.0], [98.0, 1873.0], [98.1, 1873.0], [98.2, 2000.0], [98.3, 2000.0], [98.4, 2000.0], [98.5, 2000.0], [98.6, 2000.0], [98.7, 2091.0], [98.8, 2091.0], [98.9, 2091.0], [99.0, 2091.0], [99.1, 2495.0], [99.2, 2495.0], [99.3, 2495.0], [99.4, 2495.0], [99.5, 2495.0], [99.6, 2663.0], [99.7, 2663.0], [99.8, 2663.0], [99.9, 2663.0]], "isOverall": false, "label": "Facebook", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 1100.0, "maxY": 90.0, "series": [{"data": [[1100.0, 9.0], [1200.0, 27.0], [2400.0, 1.0], [1300.0, 90.0], [2600.0, 1.0], [1400.0, 69.0], [1500.0, 13.0], [1600.0, 2.0], [1800.0, 2.0], [2000.0, 2.0]], "isOverall": false, "label": "Facebook", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2600.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 21.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 195.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 195.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 21.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.54116786E12, "maxY": 1.0, "series": [{"data": [[1.5411681E12, 1.0], [1.54116792E12, 1.0], [1.54116798E12, 1.0], [1.54116786E12, 1.0], [1.54116816E12, 1.0], [1.54116804E12, 1.0]], "isOverall": false, "label": "MEAN", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.54116816E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 1390.3518518518522, "minX": 1.0, "maxY": 1390.3518518518522, "series": [{"data": [[1.0, 1390.3518518518522]], "isOverall": false, "label": "Facebook", "isController": false}, {"data": [[1.0, 1390.3518518518522]], "isOverall": false, "label": "Facebook-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 18.0, "minX": 1.54116786E12, "maxY": 377129.4, "series": [{"data": [[1.5411681E12, 368556.4], [1.54116792E12, 377048.13333333336], [1.54116798E12, 377129.4], [1.54116786E12, 77159.16666666667], [1.54116816E12, 291393.6], [1.54116804E12, 359949.26666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.5411681E12, 86.0], [1.54116792E12, 88.0], [1.54116798E12, 88.0], [1.54116786E12, 18.0], [1.54116816E12, 68.0], [1.54116804E12, 84.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.54116816E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 1357.090909090909, "minX": 1.54116786E12, "maxY": 1442.428571428571, "series": [{"data": [[1.5411681E12, 1400.8372093023256], [1.54116792E12, 1374.090909090909], [1.54116798E12, 1357.090909090909], [1.54116786E12, 1417.0], [1.54116816E12, 1369.794117647059], [1.54116804E12, 1442.428571428571]], "isOverall": false, "label": "Facebook", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.54116816E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 476.22727272727275, "minX": 1.54116786E12, "maxY": 549.8888888888889, "series": [{"data": [[1.5411681E12, 515.6744186046511], [1.54116792E12, 482.2045454545455], [1.54116798E12, 476.22727272727275], [1.54116786E12, 549.8888888888889], [1.54116816E12, 483.2941176470589], [1.54116804E12, 510.8333333333333]], "isOverall": false, "label": "Facebook", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.54116816E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 121.2558139534884, "minX": 1.54116786E12, "maxY": 166.77777777777777, "series": [{"data": [[1.5411681E12, 121.2558139534884], [1.54116792E12, 129.45454545454544], [1.54116798E12, 122.04545454545456], [1.54116786E12, 166.77777777777777], [1.54116816E12, 123.79411764705883], [1.54116804E12, 148.40476190476193]], "isOverall": false, "label": "Facebook", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.54116816E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 1155.0, "minX": 1.54116786E12, "maxY": 2663.0, "series": [{"data": [[1.5411681E12, 2091.0], [1.54116792E12, 1873.0], [1.54116798E12, 1531.0], [1.54116786E12, 1810.0], [1.54116816E12, 1655.0], [1.54116804E12, 2663.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.5411681E12, 1215.0], [1.54116792E12, 1155.0], [1.54116798E12, 1187.0], [1.54116786E12, 1307.0], [1.54116816E12, 1169.0], [1.54116804E12, 1181.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.5411681E12, 1484.5], [1.54116792E12, 1510.0], [1.54116798E12, 1470.6], [1.54116786E12, 1810.0], [1.54116816E12, 1495.0000000000005], [1.54116804E12, 1481.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.5411681E12, 2523.5599999999977], [1.54116792E12, 1873.0], [1.54116798E12, 1873.0], [1.54116786E12, 1810.0], [1.54116816E12, 2426.3199999999933], [1.54116804E12, 2595.7999999999993]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.5411681E12, 1576.1499999999999], [1.54116792E12, 1650.3999999999994], [1.54116798E12, 1533.1], [1.54116786E12, 1810.0], [1.54116816E12, 1583.35], [1.54116804E12, 1543.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.54116816E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 1344.5, "minX": 1000.0, "maxY": 1344.5, "series": [{"data": [[1000.0, 1344.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 1000.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.create();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 470.0, "minX": 1000.0, "maxY": 470.0, "series": [{"data": [[1000.0, 470.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 1000.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.16666666666666666, "minX": 1.54116786E12, "maxY": 0.7333333333333333, "series": [{"data": [[1.5411681E12, 0.7166666666666667], [1.54116792E12, 0.7333333333333333], [1.54116798E12, 0.7333333333333333], [1.54116786E12, 0.16666666666666666], [1.54116816E12, 0.55], [1.54116804E12, 0.7]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.54116816E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.15, "minX": 1.54116786E12, "maxY": 0.7333333333333333, "series": [{"data": [[1.5411681E12, 0.7166666666666667], [1.54116792E12, 0.7333333333333333], [1.54116798E12, 0.7333333333333333], [1.54116786E12, 0.15], [1.54116816E12, 0.5666666666666667], [1.54116804E12, 0.7]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.54116816E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.15, "minX": 1.54116786E12, "maxY": 0.7333333333333333, "series": [{"data": [[1.5411681E12, 0.7166666666666667], [1.54116792E12, 0.7333333333333333], [1.54116798E12, 0.7333333333333333], [1.54116786E12, 0.15], [1.54116816E12, 0.5666666666666667], [1.54116804E12, 0.7]], "isOverall": false, "label": "Facebook-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.54116816E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.15, "minX": 1.54116786E12, "maxY": 0.7333333333333333, "series": [{"data": [[1.5411681E12, 0.7166666666666667], [1.54116792E12, 0.7333333333333333], [1.54116798E12, 0.7333333333333333], [1.54116786E12, 0.15], [1.54116816E12, 0.5666666666666667], [1.54116804E12, 0.7]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.54116816E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "responseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    choiceContainer.find("label").each(function(){
        this.style.color = color;
    });
}

