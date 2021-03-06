
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import Login from './page/login'
import Home from './page/home'
import Welcome from './page/welcome'
// hooks相关
import Hooks from './page/hooks'
import UseState from './page/hooks/useState'
import UseEffect from './page/hooks/useEffect'
import UseRef from './page/hooks/useRef'
import UseMemo from './page/hooks/useMemo'
import UseCallback from './page/hooks/useCallback'
import UseReducer from './page/hooks/useReducer'
import UseContext from './page/hooks/useContext'
// 类相关
import Classes from './page/classes'
import SelfDefinedComponent from './page/classes/1_selfDefinedComponent'
import Props from './page/classes/2_props'
import States from './page/classes/3_states'
import Render from './page/classes/4_render'
import Event from './page/classes/5_event'
import PassValue from './page/classes/6_componentPassValue'
import FatherToSon from './page/classes/6_componentPassValue/fatherToSon/father'
import SonToFather from './page/classes/6_componentPassValue/sonToFather/father'
import BrotherToBrother from './page/classes/6_componentPassValue/brotherToBrother/brother1'
import JumpPassValue from './page/classes/7_jumpPassValue'
import JumpTarget1 from './page/classes/7_jumpPassValue/target1'
import JumpTarget2 from './page/classes/7_jumpPassValue/target2'
import JumpTarget3 from './page/classes/7_jumpPassValue/target3'
import JumpProps from './page/classes/7_jumpPassValue/Props'
import JumpRedux from './page/classes/7_jumpPassValue/Redux'
import JumpContext from './page/classes/7_jumpPassValue/Context'
import JumpEventemit from './page/classes/7_jumpPassValue/Eventemit'
//h5和app相关
import H5AndApp from './page/h5AndApp'
import CallAppLib from './page/h5AndApp/callAppLib'
import WebLaunchApp from './page/h5AndApp/webLaunchApp'
//跨域相关
import CrossDomain from "./page/crossDomain"
//网络相关
import NetworkRequest from "./page/networkRequest"
import CentralDemo from "./page/networkRequest/hooksDemo/CentralDemo"
import InlineDemo from "./page/networkRequest/hooksDemo/InlineDemo"
import HookDemo from "./page/networkRequest/hooksDemo/HookDemo"
import ReactQueryDemo from "./page/networkRequest/hooksDemo/ReactQueryDemo"
//数据持久化相关
import DataPersistence from "./page/dataPersistence"

function App() {
        return (
                <HashRouter>
                        <Switch>
                                {/* 子目录 */}
                                <Route path="/login" component={Login} />
                                <Route path="/home" component={Home} />
                                <Route path="/welcome" component={Welcome} />
                                {/* hooks */}
                                <Route path="/hooks" component={Hooks} />
                                <Route path="/useState" component={UseState} />
                                <Route path="/useEffect" component={UseEffect} />
                                <Route path="/useRef" component={UseRef} />
                                <Route path="/useMemo" component={UseMemo} />
                                <Route path="/useCallback" component={UseCallback} />
                                <Route path="/useReducer" component={UseReducer} />
                                <Route path="/useContext" component={UseContext} />
                                {/* classes */}
                                <Route path="/classes" component={Classes} />
                                <Route path="/selfDefinedComponent" component={SelfDefinedComponent} />
                                <Route path="/props" component={Props} />
                                <Route path="/states" component={States} />
                                <Route path="/render" component={Render} />
                                <Route path="/event" component={Event} />
                                <Route path="/componentPassValue" component={PassValue} />
                                <Route path="/fatherToSon" component={FatherToSon} />
                                <Route path="/sonToFather" component={SonToFather} />
                                <Route path="/brotherToBrother" component={BrotherToBrother} />
                                <Route path="/jumpPassValue" component={JumpPassValue} />
                                <Route path="/jumpTarget1/:data" component={JumpTarget1} />
                                <Route path="/jumpTarget2" component={JumpTarget2} />
                                <Route path="/jumpTarget3" component={JumpTarget3} />
                                <Route path="/jumpProps" component={JumpProps} />
                                <Route path="/jumpRedux" component={JumpRedux} />
                                <Route path="/jumpContext" component={JumpContext} />
                                <Route path="/jumpEventemit" component={JumpEventemit} />
                                {/* h5和app相关验证 */}
                                <Route path="/h5AndApp" component={H5AndApp} />
                                <Route path="/callAppLib" component={CallAppLib} />
                                <Route path="/webLaunchApp" component={WebLaunchApp} />
                                {/* 跨域相关 */}
                                <Route path="/crossDomain" component={CrossDomain} />
                                {/* 网路相关 */}
                                <Route path="/networkRequest" component={NetworkRequest} />
                                <Route path="/centralDemo" component={CentralDemo} />
                                <Route path="/inlineDemo" component={InlineDemo} />
                                <Route path="/hookDemo" component={HookDemo} />
                                <Route path="/reactQueryDemo" component={ReactQueryDemo} />
                                {/* 持久化相关 */}
                                <Route path="/dataPersistence" component={DataPersistence} />
                                {/* 根路径 */}
                                <Route exact path="/" component={Home} />
                                {/* 路径错误，重定向 */}
                                <Redirect to={"/home"} />
                        </Switch>
                </HashRouter>
        );
}

export default App;
