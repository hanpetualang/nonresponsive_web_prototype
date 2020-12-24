function logoutalert(){
  var a = confirm("Apakah anda yakin ingin keluar ?");
  if(a == true){
    window.location="index.html";
  }
}
function beli(){
  var cpuval      = (document.jumlah.cpu.value);
  var monitorval  = (document.jumlah.monitor.value);
  var keyboardval = (document.jumlah.keyboard.value);
  var ramval      = (document.jumlah.ram.value);
  var ssdval      = (document.jumlah.ssd.value);
  var hddval      = (document.jumlah.hdd.value);
  var mouseval    = (document.jumlah.mouse.value);
  var kompset     = (document.jumlah.setkomp.value);

  var cpu, monitor, keyboard, ram, ssd, hdd, mouse, set, hargatotal;

   cpu       = eval(5000000 * cpuval)    ;
   monitor   = eval(3000000 * monitorval);
   keyboard  = eval(500000 * keyboardval);
   ram       = eval(500000 * ramval)     ;
   ssd       = eval(1500000 * ssdval)    ;
   hdd       = eval(2000000 * hddval)    ;
   mouse     = eval(300000 * mouseval)   ;
   set       = eval(25000000 * kompset)  ;

  document.querySelector("#cpu").textContent      = "Rp "   + cpu;
  document.querySelector("#monitor").textContent  = "Rp "   + monitor;
  document.querySelector("#keyboard").textContent = "Rp "   + keyboard;
  document.querySelector("#ram").textContent      = "Rp "   + ram;
  document.querySelector("#ssd").textContent      = "Rp "   + ssd;
  document.querySelector("#hdd").textContent      = "Rp "   + hdd;
  document.querySelector("#mouse").textContent    = "Rp "   + mouse;
  document.querySelector("#kompset").textContent  = "Rp "   + set;

  hargatotal = eval(cpu + monitor + keyboard + ram + ssd + hdd + mouse + set);
  document.querySelector("#totalharga").textContent = "Rp " + hargatotal;
}
