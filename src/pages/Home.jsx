export default function Home() {
    const homeStyle = {
        height: "10em",
        disply: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
    const title ={
        marginTop: "6em",
        fontSize: "4em"
    }

    return(
        <div style={homeStyle}>
            <h1 style={title}>Barbershop</h1>
        </div>
    )
}