import Card from "./Card"

const Content = () => {
    return (
        <div style={{
            // backgroundColor: "red",
            // color: "green",
            padding: "1rem .5rem"
        }}>
            <Card
                course_name="Frontend Development"
                isNew={true}
                imgUrl="https://div.edu.az/uploads/posts/2021-11/1637047147_photo-1549082984-1323b94df9a6.jpeg"
            />
            <Card
                course_name="Php Backend Development"
                imgUrl="https://div.edu.az/uploads/posts/2022-11/1668358778_15.jpg"
            />
            <Card course_name="Java Backend Development" />
            <Card course_name="Digital Marketing" />
            <Card course_name="UX/UI Design" />
        </div>
    )
}

export default Content