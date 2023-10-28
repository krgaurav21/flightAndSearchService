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
            // the below approach works fine but donot give updated object.
            // if we are using pg sql then returning:true can be used, else not.
            // const citi = await city.update(data,{
            //     where:{
            //         id:cityId
            //     }

            // });


            // to get updated object in mysql, we use below method.
            const citi = await city.findByPk(cityId);
            citi.name = data.name;
            await citi.save();
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

    async getAllCities(){
        try {
            const cities = await city.findAll();
            return cities;
            
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

}


module.exports = CityRepository;