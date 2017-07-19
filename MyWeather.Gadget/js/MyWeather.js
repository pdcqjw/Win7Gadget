var times =1; //1 代表 1分钟
var shows = 10;  //1 代表显示一天的预报信息
var ReceverString;
var GadgetTime;
function loadMian()
{       
  System.Gadget.visibilityChanged = checkVisibility;
  System.Gadget.onDock = Dock;
  System.Gadget.onUndock = unDock;    
}
function SpecialRefresh() {
  loadMian();
 
  if (updateTimeInterval == "") times = 10 * 1000 * 10;
  else times = updateTimeInterval * 60 * 1000;
  GadgetTime = setTimeout("self.location.reload()", times);
}
function checkVisibility() 
{
       var isVisible = System.Gadget.visible;
      if (!isVisible) 
      {
          clearTimeout(GadgetTime);
      }   
}
function unDock() {}
function Dock() {}