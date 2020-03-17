gdjs.Result_32MenuCode = {};
gdjs.Result_32MenuCode.GDYour_95ScoreObjects1= [];
gdjs.Result_32MenuCode.GDYour_95ScoreObjects2= [];
gdjs.Result_32MenuCode.GDResultObjects1= [];
gdjs.Result_32MenuCode.GDResultObjects2= [];
gdjs.Result_32MenuCode.GDPlay_95AgainObjects1= [];
gdjs.Result_32MenuCode.GDPlay_95AgainObjects2= [];

gdjs.Result_32MenuCode.conditionTrue_0 = {val:false};
gdjs.Result_32MenuCode.condition0IsTrue_0 = {val:false};
gdjs.Result_32MenuCode.condition1IsTrue_0 = {val:false};
gdjs.Result_32MenuCode.condition2IsTrue_0 = {val:false};
gdjs.Result_32MenuCode.conditionTrue_1 = {val:false};
gdjs.Result_32MenuCode.condition0IsTrue_1 = {val:false};
gdjs.Result_32MenuCode.condition1IsTrue_1 = {val:false};
gdjs.Result_32MenuCode.condition2IsTrue_1 = {val:false};


gdjs.Result_32MenuCode.mapOfGDgdjs_46Result_9532MenuCode_46GDPlay_9595AgainObjects1Objects = Hashtable.newFrom({"Play_Again": gdjs.Result_32MenuCode.GDPlay_95AgainObjects1});gdjs.Result_32MenuCode.mapOfGDgdjs_46Result_9532MenuCode_46GDPlay_9595AgainObjects1Objects = Hashtable.newFrom({"Play_Again": gdjs.Result_32MenuCode.GDPlay_95AgainObjects1});gdjs.Result_32MenuCode.mapOfGDgdjs_46Result_9532MenuCode_46GDPlay_9595AgainObjects1Objects = Hashtable.newFrom({"Play_Again": gdjs.Result_32MenuCode.GDPlay_95AgainObjects1});gdjs.Result_32MenuCode.eventsList0x5b6e18 = function(runtimeScene) {

{


gdjs.Result_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Result_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Result_32MenuCode.condition0IsTrue_0.val) {
gdjs.Result_32MenuCode.GDResultObjects1.createFrom(runtimeScene.getObjects("Result"));
{runtimeScene.getVariables().get("Result_Score").setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{for(var i = 0, len = gdjs.Result_32MenuCode.GDResultObjects1.length ;i < len;++i) {
    gdjs.Result_32MenuCode.GDResultObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("Result_Score")));
}
}}

}


{

gdjs.Result_32MenuCode.GDPlay_95AgainObjects1.createFrom(runtimeScene.getObjects("Play_Again"));

gdjs.Result_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Result_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Result_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Result_32MenuCode.mapOfGDgdjs_46Result_9532MenuCode_46GDPlay_9595AgainObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Result_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Result_32MenuCode.conditionTrue_1 = gdjs.Result_32MenuCode.condition1IsTrue_0;
gdjs.Result_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7138508);
}
}}
if (gdjs.Result_32MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Result_32MenuCode.GDPlay_95AgainObjects1 */
{for(var i = 0, len = gdjs.Result_32MenuCode.GDPlay_95AgainObjects1.length ;i < len;++i) {
    gdjs.Result_32MenuCode.GDPlay_95AgainObjects1[i].setY(gdjs.Result_32MenuCode.GDPlay_95AgainObjects1[i].getY() + (2));
}
}}

}


{

gdjs.Result_32MenuCode.GDPlay_95AgainObjects1.createFrom(runtimeScene.getObjects("Play_Again"));

gdjs.Result_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Result_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Result_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Result_32MenuCode.mapOfGDgdjs_46Result_9532MenuCode_46GDPlay_9595AgainObjects1Objects, runtimeScene, true, true);
}if ( gdjs.Result_32MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.Result_32MenuCode.conditionTrue_1 = gdjs.Result_32MenuCode.condition1IsTrue_0;
gdjs.Result_32MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7107028);
}
}}
if (gdjs.Result_32MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Result_32MenuCode.GDPlay_95AgainObjects1 */
{for(var i = 0, len = gdjs.Result_32MenuCode.GDPlay_95AgainObjects1.length ;i < len;++i) {
    gdjs.Result_32MenuCode.GDPlay_95AgainObjects1[i].setY(gdjs.Result_32MenuCode.GDPlay_95AgainObjects1[i].getY() - (2));
}
}}

}


{

gdjs.Result_32MenuCode.GDPlay_95AgainObjects1.createFrom(runtimeScene.getObjects("Play_Again"));

gdjs.Result_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Result_32MenuCode.condition1IsTrue_0.val = false;
{
gdjs.Result_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Result_32MenuCode.mapOfGDgdjs_46Result_9532MenuCode_46GDPlay_9595AgainObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Result_32MenuCode.condition0IsTrue_0.val ) {
{
gdjs.Result_32MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Result_32MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Playing", false);
}}

}


}; //End of gdjs.Result_32MenuCode.eventsList0x5b6e18


gdjs.Result_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Result_32MenuCode.GDYour_95ScoreObjects1.length = 0;
gdjs.Result_32MenuCode.GDYour_95ScoreObjects2.length = 0;
gdjs.Result_32MenuCode.GDResultObjects1.length = 0;
gdjs.Result_32MenuCode.GDResultObjects2.length = 0;
gdjs.Result_32MenuCode.GDPlay_95AgainObjects1.length = 0;
gdjs.Result_32MenuCode.GDPlay_95AgainObjects2.length = 0;

gdjs.Result_32MenuCode.eventsList0x5b6e18(runtimeScene);
return;

}

gdjs['Result_32MenuCode'] = gdjs.Result_32MenuCode;
