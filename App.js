
    // const heading =  React.createElement("h1",{
    //     id:"title",
    // },"Namaste JS From React");
    // console.log(heading);

    const heading1 = React.createElement("div",{
        id:"title1",
    },"heading1");

    const heading2 = React.createElement("div",{
        id:"title2",
    },"heading2")

    const container = React.createElement("div",{
        id:"container"
    },[heading1,heading2]);
    
    
    const root = ReactDOM.createRoot(document.getElementById("root"));

    // passing a react element inside a root
    // this render method takes an react element and modifies our dom
    root.render(container);