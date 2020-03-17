gdjs.PlayingCode = {};
gdjs.PlayingCode.GDBackgroundObjects1= [];
gdjs.PlayingCode.GDBackgroundObjects2= [];
gdjs.PlayingCode.GDBackgroundObjects3= [];
gdjs.PlayingCode.GDCatObjects1= [];
gdjs.PlayingCode.GDCatObjects2= [];
gdjs.PlayingCode.GDCatObjects3= [];
gdjs.PlayingCode.GDMouseObjects1= [];
gdjs.PlayingCode.GDMouseObjects2= [];
gdjs.PlayingCode.GDMouseObjects3= [];
gdjs.PlayingCode.GDScoreboardObjects1= [];
gdjs.PlayingCode.GDScoreboardObjects2= [];
gdjs.PlayingCode.GDScoreboardObjects3= [];
gdjs.PlayingCode.GDRun_95MessageObjects1= [];
gdjs.PlayingCode.GDRun_95MessageObjects2= [];
gdjs.PlayingCode.GDRun_95MessageObjects3= [];
gdjs.PlayingCode.GDCheeseObjects1= [];
gdjs.PlayingCode.GDCheeseObjects2= [];
gdjs.PlayingCode.GDCheeseObjects3= [];

gdjs.PlayingCode.conditionTrue_0 = {val:false};
gdjs.PlayingCode.condition0IsTrue_0 = {val:false};
gdjs.PlayingCode.condition1IsTrue_0 = {val:false};
gdjs.PlayingCode.condition2IsTrue_0 = {val:false};


gdjs.PlayingCode.mapOfGDgdjs_46PlayingCode_46GDCheeseObjects2Objects = Hashtable.newFrom({"Cheese": gdjs.PlayingCode.GDCheeseObjects2});gdjs.PlayingCode.mapOfGDgdjs_46PlayingCode_46GDCheeseObjects2Objects = Hashtable.newFrom({"Cheese": gdjs.PlayingCode.GDCheeseObjects2});gdjs.PlayingCode.eventsList0x6cedac = function(runtimeScene) {

{


gdjs.PlayingCode.condition0IsTrue_0.val = false;
{
gdjs.PlayingCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "Score_Timer");
}if (gdjs.PlayingCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("Score_Scene").add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Score_Timer");
}}

}


{

gdjs.PlayingCode.GDCheeseObjects2.createFrom(runtimeScene.getObjects("Cheese"));

gdjs.PlayingCode.condition0IsTrue_0.val = false;
gdjs.PlayingCode.condition1IsTrue_0.val = false;
{
gdjs.PlayingCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "Cheese_Timer");
}if ( gdjs.PlayingCode.condition0IsTrue_0.val ) {
{
gdjs.PlayingCode.condition1IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.PlayingCode.mapOfGDgdjs_46PlayingCode_46GDCheeseObjects2Objects) < 5;
}}
if (gdjs.PlayingCode.condition1IsTrue_0.val) {
/* Reuse gdjs.PlayingCode.GDCheeseObjects2 */
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.PlayingCode.mapOfGDgdjs_46PlayingCode_46GDCheeseObjects2Objects, gdjs.randomInRange(100, 1500), gdjs.randomInRange(100, 500), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Cheese_Timer");
}}

}


{


gdjs.PlayingCode.condition0IsTrue_0.val = false;
{
gdjs.PlayingCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.PlayingCode.condition0IsTrue_0.val) {
gdjs.PlayingCode.GDMouseObjects2.createFrom(gdjs.PlayingCode.GDMouseObjects1);

{for(var i = 0, len = gdjs.PlayingCode.GDMouseObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDMouseObjects2[i].addForce(-(200), 0, 0);
}
}}

}


{


gdjs.PlayingCode.condition0IsTrue_0.val = false;
{
gdjs.PlayingCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "g");
}if (gdjs.PlayingCode.condition0IsTrue_0.val) {
gdjs.PlayingCode.GDMouseObjects2.createFrom(gdjs.PlayingCode.GDMouseObjects1);

{for(var i = 0, len = gdjs.PlayingCode.GDMouseObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDMouseObjects2[i].addForce(200, 0, 0);
}
}}

}


{


gdjs.PlayingCode.condition0IsTrue_0.val = false;
{
gdjs.PlayingCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
}if (gdjs.PlayingCode.condition0IsTrue_0.val) {
gdjs.PlayingCode.GDMouseObjects2.createFrom(gdjs.PlayingCode.GDMouseObjects1);

{for(var i = 0, len = gdjs.PlayingCode.GDMouseObjects2.length ;i < len;++i) {
    gdjs.PlayingCode.GDMouseObjects2[i].addForce(0, -(200), 0);
}
}}

}


{


gdjs.PlayingCode.condition0IsTrue_0.val = false;
{
gdjs.PlayingCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "f");
}if (gdjs.PlayingCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PlayingCode.GDMouseObjects1 */
{for(var i = 0, len = gdjs.PlayingCode.GDMouseObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDMouseObjects1[i].addForce(0, 200, 0);
}
}}

}


}; //End of gdjs.PlayingCode.eventsList0x6cedac
gdjs.PlayingCode.mapOfGDgdjs_46PlayingCode_46GDMouseObjects1Objects = Hashtable.newFrom({"Mouse": gdjs.PlayingCode.GDMouseObjects1});gdjs.PlayingCode.mapOfGDgdjs_46PlayingCode_46GDCheeseObjects1Objects = Hashtable.newFrom({"Cheese": gdjs.PlayingCode.GDCheeseObjects1});gdjs.PlayingCode.mapOfGDgdjs_46PlayingCode_46GDCatObjects1Objects = Hashtable.newFrom({"Cat": gdjs.PlayingCode.GDCatObjects1});gdjs.PlayingCode.mapOfGDgdjs_46PlayingCode_46GDMouseObjects1Objects = Hashtable.newFrom({"Mouse": gdjs.PlayingCode.GDMouseObjects1});gdjs.PlayingCode.eventsList0x5b6e18 = function(runtimeScene) {

{


gdjs.PlayingCode.condition0IsTrue_0.val = false;
{
gdjs.PlayingCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.PlayingCode.condition0IsTrue_0.val) {
gdjs.PlayingCode.GDCatObjects1.createFrom(runtimeScene.getObjects("Cat"));
gdjs.PlayingCode.GDMouseObjects1.createFrom(runtimeScene.getObjects("Mouse"));
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Game_Start");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Score_Timer");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Cheese_Timer");
}{for(var i = 0, len = gdjs.PlayingCode.GDMouseObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDMouseObjects1[i].setPosition(800,450);
}
}{for(var i = 0, len = gdjs.PlayingCode.GDCatObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDCatObjects1[i].setPosition(1500,450);
}
}}

}


{


gdjs.PlayingCode.condition0IsTrue_0.val = false;
{
gdjs.PlayingCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "Game_Start");
}if (gdjs.PlayingCode.condition0IsTrue_0.val) {
gdjs.PlayingCode.GDCatObjects1.createFrom(runtimeScene.getObjects("Cat"));
gdjs.PlayingCode.GDMouseObjects1.createFrom(runtimeScene.getObjects("Mouse"));
gdjs.PlayingCode.GDRun_95MessageObjects1.createFrom(runtimeScene.getObjects("Run_Message"));
{for(var i = 0, len = gdjs.PlayingCode.GDRun_95MessageObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDRun_95MessageObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.PlayingCode.GDCatObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDCatObjects1[i].addForceTowardObject((gdjs.PlayingCode.GDMouseObjects1.length !== 0 ? gdjs.PlayingCode.GDMouseObjects1[0] : null), 150, 0);
}
}
{ //Subevents
gdjs.PlayingCode.eventsList0x6cedac(runtimeScene);} //End of subevents
}

}


{


{
gdjs.PlayingCode.GDScoreboardObjects1.createFrom(runtimeScene.getObjects("Scoreboard"));
{for(var i = 0, len = gdjs.PlayingCode.GDScoreboardObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDScoreboardObjects1[i].setString("Score : " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("Score_Scene")));
}
}}

}


{

gdjs.PlayingCode.GDCheeseObjects1.createFrom(runtimeScene.getObjects("Cheese"));
gdjs.PlayingCode.GDMouseObjects1.createFrom(runtimeScene.getObjects("Mouse"));

gdjs.PlayingCode.condition0IsTrue_0.val = false;
{
gdjs.PlayingCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PlayingCode.mapOfGDgdjs_46PlayingCode_46GDMouseObjects1Objects, gdjs.PlayingCode.mapOfGDgdjs_46PlayingCode_46GDCheeseObjects1Objects, false, runtimeScene, false);
}if (gdjs.PlayingCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PlayingCode.GDCheeseObjects1 */
{runtimeScene.getVariables().get("Score_Scene").add(30);
}{for(var i = 0, len = gdjs.PlayingCode.GDCheeseObjects1.length ;i < len;++i) {
    gdjs.PlayingCode.GDCheeseObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.PlayingCode.GDCatObjects1.createFrom(runtimeScene.getObjects("Cat"));
gdjs.PlayingCode.GDMouseObjects1.createFrom(runtimeScene.getObjects("Mouse"));

gdjs.PlayingCode.condition0IsTrue_0.val = false;
{
gdjs.PlayingCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PlayingCode.mapOfGDgdjs_46PlayingCode_46GDCatObjects1Objects, gdjs.PlayingCode.mapOfGDgdjs_46PlayingCode_46GDMouseObjects1Objects, false, runtimeScene, false);
}if (gdjs.PlayingCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Result Menu", false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Score_Scene")));
}}

}


}; //End of gdjs.PlayingCode.eventsList0x5b6e18


gdjs.PlayingCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PlayingCode.GDBackgroundObjects1.length = 0;
gdjs.PlayingCode.GDBackgroundObjects2.length = 0;
gdjs.PlayingCode.GDBackgroundObjects3.length = 0;
gdjs.PlayingCode.GDCatObjects1.length = 0;
gdjs.PlayingCode.GDCatObjects2.length = 0;
gdjs.PlayingCode.GDCatObjects3.length = 0;
gdjs.PlayingCode.GDMouseObjects1.length = 0;
gdjs.PlayingCode.GDMouseObjects2.length = 0;
gdjs.PlayingCode.GDMouseObjects3.length = 0;
gdjs.PlayingCode.GDScoreboardObjects1.length = 0;
gdjs.PlayingCode.GDScoreboardObjects2.length = 0;
gdjs.PlayingCode.GDScoreboardObjects3.length = 0;
gdjs.PlayingCode.GDRun_95MessageObjects1.length = 0;
gdjs.PlayingCode.GDRun_95MessageObjects2.length = 0;
gdjs.PlayingCode.GDRun_95MessageObjects3.length = 0;
gdjs.PlayingCode.GDCheeseObjects1.length = 0;
gdjs.PlayingCode.GDCheeseObjects2.length = 0;
gdjs.PlayingCode.GDCheeseObjects3.length = 0;

gdjs.PlayingCode.eventsList0x5b6e18(runtimeScene);
return;

}

gdjs['PlayingCode'] = gdjs.PlayingCode;
