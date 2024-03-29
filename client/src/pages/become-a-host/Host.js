import React, { useState } from "react";
import Header from "./Header";
import ScrollBar from "./ScrollBar";
import Bar from "./Bar";
import Page_1 from "./Page_1";
import Page_2 from "./Page_2";
import Page_3 from "./Page_3";
import Page_4 from "./Page_4";
import Page_5 from "./Page_5";
import Page_6 from "./Page_6";
import Page_8 from "./Page_8";
import Page_9 from "./Page_9";
import * as API from "../../../src/api/index";
import Page_7 from "./Page_7";

function Host() {
    const [progress, setProgress] = useState(1);

    const [propertyTypes, setPropertyTypes] = useState([]);
    const [images, setImages] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
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

            case "Location":
                setLocation(data);
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

    const handleNext = async () => {
        if (progress < 9)
            setProgress(progress + 1);

        else {
            const userInfo = JSON.parse(localStorage.getItem("user_info"));

            const data = {
                hostName: userInfo.name,
                hostPicture: userInfo.picture,
                propertyTypes: propertyTypes,
                images: images,
                title: title,
                description: description,
                location: location,
                price: price
            };

            try {
                await API.publishRoom(data);
                window.location.href = `/`;

            } catch (error) {
                console.log(error.response);
            }
        }
    };

    const pages = {
        1: <Page_1/>,
        2: <Page_2 savingData={handleSavingData} propertyTypes={propertyTypes}/>,
        3: <Page_3/>,
        4: <Page_4 savingData={handleSavingData} images={images}/>,
        5: <Page_5 savingData={handleSavingData} title={title}/>,
        6: <Page_6 savingData={handleSavingData} description={description}/>,
        7: <Page_7 savingData={handleSavingData} location={location}/>,
        8: <Page_8/>,
        9: <Page_9 savingData={handleSavingData} price={price}/>
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