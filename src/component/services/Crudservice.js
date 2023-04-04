import record from "../../env"

class Crudservice{
  async insertData (routeName, data){
      console.log('Insert Data Called');
      console.log(routeName);
      console.log(data);
      console.log(record.serverPath);
      var finalPath = record.serverPath+routeName;
      console.log(finalPath);
  }

  selectData(){}
  deleteData(){}
  updateData(){}
}

var crudObj =new Crudservice();
export default crudObj