let obj = JSON.parse($response.body);
obj.has_owned = true;
$done({body: JSON.stringify(obj)});
//https:\/\/read\.douban\.com\/api\/v2\/works\/\d+($|\?x_includes=has_owned%2Cprice%2Cis_in_library%2Cvip%2Cpromotion)