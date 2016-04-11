<html>
  <head>
    <title>Baslik</title>
<style>
table {
    border-collapse: collapse;
font-size:11px;
font-family:Trebuchet MS;
font-weight:bold
}

table, th, td {
    border: 1px solid black;
}
@page {
margin:0;
}
body  
{ 
    /* this affects the margin on the content before sending to printer */ 
    margin: 20px;  
} 
</style>
  </head>
  <body>
<?php
$html="";
$csvData = file_get_contents('html.csv');

$lines = explode(PHP_EOL, $csvData);
$array = array();
foreach ($lines as $line) {
    $array[] = str_getcsv($line,'|');
}
$html .= "<table style='margin-left:0px' width='100%'>";
$html .= "<tr><td colspan='2' align='center'>A.U.M.Y.O 2015-2016 EGITIM OGRETIM DONEMI<br /> GUZ YARIYILI BILGISAYAR PROGRAMCILIGI 
 PROGRAMI WEB TASARIMININ TEMELLERİ DERSI(BIL107-GBIL107) BÜTÜNLEME SORULARI (21.01.2016)-- B</td></tr>";
$html .= "</table>";
$i=1;
$html .= "<table width='100%' border='1'>";
shuffle($array);
foreach($array as $row) {
  if(!empty($row[0])) {
    $siklar =  array_slice($row, 1);
    shuffle($siklar);
    if($i%2) {
      $renk = "#FFFFFF";
    }
    else {
      $renk = "#DDDDDD";
    }
    $html .= "<tr><td colspan='2'><b>$i. &nbsp;</b>".htmlspecialchars($row[0], ENT_QUOTES)."</td></tr>";
    $html .= "<tr>";
    $html .= "<td style='border-bottom-style:double'>A) ".htmlspecialchars($siklar[0], ENT_QUOTES)."</td>";
    $html .= "<td>B) ".htmlspecialchars($siklar[1], ENT_QUOTES)."</td>";
    $html .= "</tr>";
    $html .= "<tr style='border-bottom-style:double'>";
    $html .= "<td>C) ".htmlspecialchars($siklar[2], ENT_QUOTES)."</td>";
    $html .= "<td>D) ".htmlspecialchars($siklar[3], ENT_QUOTES)."</td>";
    $html .= "</tr>";
    $i++;
  }
}

$html .= "</table>";
echo $html;
    ?>
  </body>
</html>
