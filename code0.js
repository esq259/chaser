gdjs.Start_32MenuCode = {};
gdjs.Start_32MenuCode.GDTitleObjects1= [];
gdjs.Start_32MenuCode.GDTitleObjects2= [];
gdjs.Start_32MenuCode.GDStart_95ButtonObjects1= [];
gdjs.Start_32MenuCode.GDStart_95ButtonObjects2= [];

gdjs.Start_32MenuCode.conditionTrue_0 = {val:false};
gdjs.Start_32MenuCode.condition0IsTrue_0 = {val:false};
gdjs.Start_32MenuCode.condition1IsTrue_0 = {val:false};
gdjs.Start_32MenuCode.condition2IsTrue_0 = {val:false};
gdjs.Start_32MenuCode.conditionTrue_1 = {val:false};
gdjs.Start_32MenuCode.condition0IsTrue_1 = {val:false};
gdjs.Start_32MenuCode.condition1IsTrue_1 = {val:false};
gdjs.Start_32MenuCode.condition2IsTrue_1 = {val:false};


gdjs.Start_32MenuCode.mapOfGDgdjs_46Start_9532MenuCode_46GDStart_9595ButtonObjects1Objects = Hashtable.newFrom({"Start_Button": gdjs.Start_32MenuCode.GDStart_95ButtonObjects1});gdjs.Start_32MenuCode.mapOfGDgdjs_46Start_9532MenuCode_46GDStart_9595ButtonObjects1Objects = Hashtable.newFrom({"Start_Button": gdjs.Start_32MenuCode.GDStart_95ButtonObjects1});gdjs.Start_32MenuCode.mapOfGDgdjs_46Start_9532MenuCode_46GDStart_9595ButtonObjects1Objects = Hashtable.newFrom({"Start_Button": gdjs.Start_32MenuCode.GDStart_95ButtonObjects1});gdjs.Start_32MenuCode.eventsList0x5b6e18 = function(runtimeScene) {

{

gdjs.Start_32MenuCode.GDStart_95ButtonObjects1.createFrom(runtimeScene.getObjects("Start_Button"));

gdjs.Start_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Start_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Start_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Start_32MenuCode.mapOfGDgdjs_46Start_9532MenuCode_46GDStart_9595ButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Start_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Start_32MenuCode.conditionTrue_1 = gdjs.Start_32MenuCode.condition1IsTrue_0;
gdjs.Start_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7138844);
}
}}
if (gdjs.Start_32MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Start_32MenuCode.GDStart_95ButtonObjects1 */
{for(var i = 0, len = gdjs.Start_32MenuCode.GDStart_95ButtonObjects1.length ;i < len;++i) {
    gdjs.Start_32MenuCode.GDStart_95ButtonObjects1[i].setY(gdjs.Start_32MenuCode.GDStart_95ButtonObjects1[i].getY() + (2));
}
}}

}


{

gdjs.Start_32MenuCode.GDStart_95ButtonObjects1.createFrom(runtimeScene.getObjects("Start_Button"));

gdjs.Start_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Start_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Start_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Start_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Start_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Start_32MenuCode.mapOfGDgdjs_46Start_9532MenuCode_46GDStart_9595ButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.Start_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Playing", false);
}}

}


{

gdjs.Start_32MenuCode.GDStart_95ButtonObjects1.createFrom(runtimeScene.getObjects("Start_Button"));

gdjs.Start_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Start_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Start_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Start_32MenuCode.mapOfGDgdjs_46Start_9532MenuCode_46GDStart_9595ButtonObjects1Objects, runtimeScene, true, true);
}if ( gdjs.Start_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Start_32MenuCode.conditionTrue_1 = gdjs.Start_32MenuCode.condition1IsTrue_0;
gdjs.Start_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7088724);
}
}}
if (gdjs.Start_32MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Start_32MenuCode.GDStart_95ButtonObjects1 */
{for(var i = 0, len = gdjs.Start_32MenuCode.GDStart_95ButtonObjects1.length ;i < len;++i) {
    gdjs.Start_32MenuCode.GDStart_95ButtonObjects1[i].setY(gdjs.Start_32MenuCode.GDStart_95ButtonObjects1[i].getY() - (2));
}
}}

}


}; //End of gdjs.Start_32MenuCode.eventsList0x5b6e18


gdjs.Start_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Start_32MenuCode.GDTitleObjects1.length = 0;
gdjs.Start_32MenuCode.GDTitleObjects2.length = 0;
gdjs.Start_32MenuCode.GDStart_95ButtonObjects1.length = 0;
gdjs.Start_32MenuCode.GDStart_95ButtonObjects2.length = 0;

gdjs.Start_32MenuCode.eventsList0x5b6e18(runtimeScene);
return;

}

gdjs['Start_32MenuCode'] = gdjs.Start_32MenuCode;
