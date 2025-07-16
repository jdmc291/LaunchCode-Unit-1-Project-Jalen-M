
const  GetAllProducts = async () => {
    
        const teaProducts = await fetch("https://tea-api-gules.vercel.app/api");

        const teaProductsData = await teaProducts.json();

        return teaProductsData;
    }


export default GetAllProducts