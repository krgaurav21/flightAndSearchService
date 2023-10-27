const {city} = require('../models/index');


class CityRepository{
    async createCity({name}){
        try{
            const citi = await city.create({
                name
            });
            return citi;

        }catch(error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async deleteCity(cityId){
        try{
            await city.destroy({
                where:{
                    id:cityId
                }
                
            });
            return true;
        }catch(error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async updateCity(cityId,data){
        try {
            const citi = await city.update(data,{
                where:{
                    id:cityId
                }

            });
            return citi;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getCity(cityId){
        try {
            const citi = await city.findByPk(cityId);   // findByPk-- means find by primary key ; 
                                                        //you can learn more about different sequelize Model Querying.
            return citi;
            
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
            
        }

    }

}


module.exports = CityRepository;