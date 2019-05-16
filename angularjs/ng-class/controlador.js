angular
    .module('acumuladorApp', [])
    .controller("acumuladorAppCtrl", controladorPrincipal);

function controladorPrincipal(){
    //esta función es mi controlador
    var vm = this;
    vm.total = 0;
    vm.tamTitular = "titularpeq"
    vm.cuanto = 1 

    vm.sumar = function(){
        vm.total += parseInt(vm.cuanto);
        console.warn('000000000=======0000000')
    }
    vm.restar = function(){
        vm.total -= parseInt(vm.cuanto);
    }
    vm.clases = ["uno", "dos", "tres"];
};
