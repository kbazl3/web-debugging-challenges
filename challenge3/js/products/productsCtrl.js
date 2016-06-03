angular.module('miniRouting').controller("productsCtrl", function($scope, $stateParams, productService){
    var productType = $stateParams.id;

    console.log(productType);




    var getData = function() {
        var productType = $stateParams.id;
        productData = productService.sendShoes()
        console.log(productData);
        if (productType = "shoes"){
            $scope.productData = productData.shoes;
        } else if (productType = "socks") {
            $scope.productData = productData.socks;
        }
    }
    getData()
});
