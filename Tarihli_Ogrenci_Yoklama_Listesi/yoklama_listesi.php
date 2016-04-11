<html>
<head>
<style>
.soluk {
font-weight:normal;
font-size:10px;
color:#888888;
}
@page {
   size: landscape;
   margin: 3mm 1mm 0mm 1mm;
}
@media print{@page {size: landscape}}
table {
font-size:11px;

    border-collapse: collapse;
}

table, th, td {
    border: 1px solid black;
}
tr.xy:nth-child(even) {  
background: #CCC;  
}  

tr.xy:nth-child(odd) {  
background: #FFF;  
}
</style>
</head>
<body>
<?php
$csvData = file_get_contents('ogrenci_listesi.csv');

$lines = explode(PHP_EOL, $csvData);
$ogrenciler = array();
foreach ($lines as $line) {
    $ogrenciler[] = str_getcsv($line,'|');
}

$aylar = array('2'=>'Şubat', '3'=>'Mart', '4'=>'Nisan', '5'=>'Mayıs', '6'=>'Haziran');
$baslangic = new DateTime("2016-02-15");
$bitis = new DateTime("2016-05-22");

$tarihler=array();
$tarih = $baslangic;
while($baslangic < $bitis) {
  $hangi_gun = $tarih->format('w');
  $hangi_ay = $tarih->format('n');
  $tarihler[$hangi_ay][] = $baslangic->format('d');
  $tarihler[$hangi_ay][] = $baslangic->format('d');
  $tarihler[$hangi_ay][] = $baslangic->format('d');
  $tarihler[$hangi_ay][] = $baslangic->format('d');

  $baslangic->add(new DateInterval('P7D'));

/*
  if($hangi_gun == 2) {
    $baslangic->add(new DateInterval('P2D'));
  }
  else {
    $baslangic->add(new DateInterval('P5D'));
  }
 */
}
$hucre_sayisi = count($tarihler, COUNT_RECURSIVE) - count($tarihler);

$aylar_satiri = "<tr>";
$gunler_satiri = "";

foreach ($tarihler as $ay => $gunler) {
  $colspan = count($gunler);
  $aylar_satiri .= "<td colspan='$colspan' align='center'><b>{$aylar[$ay]}<b></td>";
  foreach($gunler as $x) {
    $gunler_satiri .= "<td><b>$x</b></td>";
  }
}
$aylar_satiri .= "</tr>";
$satirlar =str_replace("<td>","<td class='soluk'>", $gunler_satiri);
$gunler_satiri = "<tr>$gunler_satiri</tr>";

echo "<table>";
echo "<tr><td rowspan='3' colspan='2'>ÖĞRENCİLER</td>";
echo "<td colspan='$hucre_sayisi' align='center'><b>MATEMATİK[GBIL102] - 2016<b></td></tr>";

echo $aylar_satiri;
echo $gunler_satiri;
foreach($ogrenciler as $satir) {
  if(isset($satir[1])) {
    echo "<tr class='xy'>";
    echo "<td>{$satir[0]}</td>";
    echo "<td>{$satir[1]} {$satir[2]}</td>";
    echo $satirlar;
    echo "</tr>";
  }
}
echo "</table>";
?>
</body>
</html>
