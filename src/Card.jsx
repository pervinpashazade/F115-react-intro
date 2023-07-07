const Card = (prop) => {

    console.log(prop);

    const imgStyle = {
        width: "60px",
        height: "60px",
        objectFit: "cover"
    }

    return (
        <div>
            <img
                style={imgStyle}
                width="60"
                height="60"
                alt="course"
                src={prop.imgUrl}
            />
            {prop.course_name}
        </div>
    )
}

export default Card;