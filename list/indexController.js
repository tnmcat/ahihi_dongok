var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http) {
    // Đọc Data từ file JSON ( R - Read)
    $http.get("Countries.json")
        .then(function (rspt) {
            $scope.countriesList = rspt.data.country;
        });
    // Khai báo biến môi trường
    $scope.countries = {}; //Declare an object
    $scope.countriesList = []; //Declare an array
    // Save changes
    $scope.Save = function(){
        $.grep($scope.countriesList, function(e){
            if(e.code == $scope.countriesList.code){
                e.name = $scope.countriesList.name;
                e.capital = $scope.countriesList.capital;
                $scope.btnSave =true;
            }
        });
    }
    // Chọn record trong danh sách
    $scope.getRecord = function(data){
        $scope.countries.code = data.code;
        $scope.countries.name = data.name;
        $scope.countries.capital = data.capital;
        $scope.btnSave = true;
        $scope.btnDelete = false;
    }
   
    // Xóa Record (D - Delete)
    $scope.Delete = function(data) {
        let msg = "Are you sure to delete this record?";
        if (confirm(msg)) {
          let index = $scope.countriesList.indexOf(data);
          $scope.countriesList.splice(index, 1);
        }
      };
   
    //Sắp xếp
    $scope.sort = {};
    $scope.doSort = function(cot){
        var sort = $scope.sort;
        if(sort.cot == cot) {
            sort.descending = !sort.descending;
        }
        else{
            sort.cot = cot;
            sort.descending = false;
        }
    }
});







