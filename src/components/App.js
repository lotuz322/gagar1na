import './App.css';
import Header from "./Header";
import {Route, Switch} from "react-router-dom";
import SubHeader from "./SubHeader/SubHeader";

import ProductsPage from "../pages/ProductsPage";
import MaterialsPage from "../pages/MaterialsPage";
import ColorPage from "../pages/ColorPage";
import {materials, products} from "../util/products-value";
import ProductTypePage from "../pages/ProductTypePage";
import ProductTypeCategory from "../pages/ProductTypeCategory";
import ItemPage from "../pages/ItemPage";
import Footer from "./Footer";
import MainPage from "../pages/MainPage";
import ContactPage from "../pages/ContactPage";
import {useState} from "react";
import AutomationItemPage from "../pages/AutomationItemPage";
import ProductAutomationPage from "../pages/ProductAutomationPage";
import ColorPageSolo from "../pages/ColorPageSolo";
import DocumentationPage from "../pages/DocumentationPage";

function App() {
    const [subHeaderTitle, setSubHeaderTitle] = useState('');
    return (
        <>
            <Header/>
            <SubHeader subHeaderTitle={subHeaderTitle}/>
            <main className="main">
                <Switch>
                    <Route exact path="/">
                        <MainPage setSubHeaderTitle={() => setSubHeaderTitle('Главная')}/>
                    </Route>
                    <Route exact path="/products">
                        <ProductsPage setSubHeaderTitle={() => setSubHeaderTitle('Наша продукция')}/>
                    </Route>
                    <Route exact path="/products/:type">
                        <ProductTypePage setHeader={(newTitle) => setSubHeaderTitle(newTitle)}/>
                    </Route>

                    <Route exact path="/products/pleated-curtains/automation/:category">
                        <AutomationItemPage
                            setHeader={(newTitle) => setSubHeaderTitle(newTitle)}
                            automationObject={products['pleated-curtains'].data.automation.data}
                            subHeader={'Автоматика для плиссе'}/>
                    </Route>

                    <Route exact path="/products/roller-blinds/automation/management/">
                        <ProductAutomationPage
                            setHeader={(newTitle) => setSubHeaderTitle(newTitle)}
                            automationObject={products['roller-blinds'].data.automation.data.management}
                            subHeader={'Управление'}/>
                    </Route>
                    <Route exact path="/products/roller-blinds/automation/:category">
                        <AutomationItemPage
                            setHeader={(newTitle) => setSubHeaderTitle(newTitle)}
                            automationObject={products['roller-blinds'].data.automation.data}
                            subHeader={'Рулонные шторы автоматика'}/>
                    </Route>


                    <Route exact path="/products/cornices/automation/electric-drive/:category">
                        <AutomationItemPage
                            setHeader={(newTitle) => setSubHeaderTitle(newTitle)}
                            automationObject={products['cornices'].data.automation.data["electric-drive"].data}
                            subHeader={'Электроприводы'}/>
                    </Route>
                    <Route exact path="/products/cornices/automation/electric-drive/">
                        <ProductAutomationPage
                            setHeader={(newTitle) => setSubHeaderTitle(newTitle)}
                            automationObject={products['cornices'].data.automation.data["electric-drive"]}
                            subHeader={'Электроприводы'}/>
                    </Route>

                    <Route exact path="/products/cornices/automation/management/:category">
                        <AutomationItemPage
                            setHeader={(newTitle) => setSubHeaderTitle(newTitle)}
                            automationObject={products['cornices'].data.automation.data["management"].data}
                            subHeader={'Управление'}/>
                    </Route>
                    <Route exact path="/products/cornices/automation/management/">
                        <ProductAutomationPage
                            setHeader={(newTitle) => setSubHeaderTitle(newTitle)}
                            automationObject={products['cornices'].data.automation.data["management"]}
                            subHeader={'Управление'}/>
                    </Route>

                    <Route exact path="/products/cornices/automation/connection-diagrams/:category">
                        <AutomationItemPage
                            setHeader={(newTitle) => setSubHeaderTitle(newTitle)}
                            automationObject={products['cornices'].data.automation.data["connection-diagrams"].data}
                            subHeader={'Схемы подключения'}/>
                    </Route>
                    <Route exact path="/products/cornices/automation/connection-diagrams/">
                        <ProductAutomationPage
                            setHeader={(newTitle) => setSubHeaderTitle(newTitle)}
                            automationObject={products['cornices'].data.automation.data["connection-diagrams"]}
                            subHeader={'Схемы подключения'}/>
                    </Route>


                    <Route exact path="/products/:type/:category">
                        <ProductTypeCategory setHeader={(newTitle) => setSubHeaderTitle(newTitle)}/>
                    </Route>
                    <Route exact path="/products/:type/:category/:item">
                        <ItemPage setHeader={(newTitle) => setSubHeaderTitle(newTitle)}/>
                    </Route>
                    <Route exact path="/materials">
                        <MaterialsPage/>
                    </Route>
                    <Route path="/materials/pleated-curtains">
                        <ColorPage colors={materials['pleated-curtains']}/>
                    </Route>
                    <Route path="/materials/roller-blinds">
                        <ColorPage colors={materials['roller-blinds']}/>
                    </Route>
                    <Route path="/materials/window-blind">
                        <ColorPage colors={materials['window-blind']}/>
                    </Route>
                    <Route path="/materials/cornices">
                        <ColorPageSolo colors={materials['cornices']}/>
                    </Route>

                    <Route path="/documentation">
                        <DocumentationPage/>
                    </Route>
                    <Route path="/contacts">
                        <ContactPage/>
                    </Route>
                </Switch>
            </main>
            <Footer/>
        </>
    );
}

export default App;
