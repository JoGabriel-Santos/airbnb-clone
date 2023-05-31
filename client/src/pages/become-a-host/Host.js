import React, {useState} from "react";

import Header from "./Header";
import ScrollBar from "./ScrollBar";
import Bar from "./Bar";

import Page_1 from "./Page_1";
import Page_2 from "./Page_2";
import Page_3 from "./Page_3";
import Page_4 from "./Page_4";
import Page_5 from "./Page_5";
import Page_6 from "./Page_6";
import Page_7 from "./Page_7";
import Page_8 from "./Page_8";

function Host() {
    const [progress, setProgress] = useState(1);

    const [propertyTypes, setPropertyTypes] = useState([]);
    const [images, setImages] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);

    const handleSavingData = (data, type) => {

        switch (type) {
            case "Property type":
                if (!propertyTypes.includes(data))
                    setPropertyTypes(prevPropertyTypes => [...prevPropertyTypes, data]);
                break;

            case "Images":
                setImages(prevImages => [...prevImages, data]);
                break;

            case "Title":
                setTitle(data);
                break;

            case "Description":
                setDescription(data);
                break;

            case "Price":
                setPrice(data);
                break;
        }
    }

    const handleBack = () => {
        if (progress > 1)
            setProgress(progress - 1);
    };

    const handleNext = () => {
        if (progress < 8)
            setProgress(progress + 1);

        else {
            const data = {
                propertyTypes: propertyTypes,
                images: images,
                title: title,
                description: description,
                price: price
            };

            const jsonData = JSON.stringify(data);



        }
    };

    const pages = {
        1: <Page_1/>,
        2: <Page_2 savingData={handleSavingData} propertyTypes={propertyTypes}/>,
        3: <Page_3/>,
        4: <Page_4 savingData={handleSavingData} images={images}/>,
        5: <Page_5 savingData={handleSavingData} title={title}/>,
        6: <Page_6 savingData={handleSavingData} description={description}/>,
        7: <Page_7/>,
        8: <Page_8 savingData={handleSavingData} price={price}/>
    };

    return (
        <React.Fragment>
            <Header/>

            {pages[progress]}

            <Bar progress={progress}/>
            <ScrollBar back={handleBack} next={handleNext}/>
        </React.Fragment>
    )
}

export default Host;