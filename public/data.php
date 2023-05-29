<?php
header('Content-Type: application/json');
$authors = array(
    array(
        'data' => '2021-05-02',
        'name' => '刘兵1',
        'province' => '湖北',
        'city' => '武汉市',
        'address' => '武汉解放大道717号',
        'zip' => 420104
    ),
    array(
        'data' => '2021-08-13',
        'name' => '旺琼1',
        'province' => '湖北',
        'city' => '荆州市',
        'address' => '荆州市武德路世纪佳园520号',
        'zip' => 430000
    ),
    array(
        'data' => '2021-05-02',
        'name' => '刘兵2',
        'province' => '湖北',
        'city' => '武汉市',
        'address' => '武汉解放大道717号',
        'zip' => 420104
    ),
    array(
        'data' => '2021-08-13',
        'name' => '旺琼2',
        'province' => '湖北',
        'city' => '荆州市',
        'address' => '荆州市武德路世纪佳园520号',
        'zip' => 430000
    ),
    array(
        'data' => '2021-05-02',
        'name' => '刘兵3',
        'province' => '湖北',
        'city' => '武汉市',
        'address' => '武汉解放大道717号',
        'zip' => 420104
    ),
    array(
        'data' => '2021-08-13',
        'name' => '旺琼3',
        'province' => '湖北',
        'city' => '荆州市',
        'address' => '荆州市武德路世纪佳园520号',
        'zip' => 430000
    )
);


$jsonencode = json_encode($authors);
//输出变量$jsonencode
echo $jsonencode;
?>