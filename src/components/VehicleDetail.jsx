function VehicleDetail({vehicle}){
  return(
    <div>
      <h3>{vehicle[0].licensePlate}</h3>
      <h3>{vehicle[0].voertuigsoort}</h3>
      <h3>{vehicle[0].massa_ledig_voertuig}</h3>
      <h3>{vehicle[0].brandstof}</h3>
      <h3>{vehicle[0].bruto_bpm}</h3>
      <h3>{vehicle[0].mrb}</h3>
    </div>
  )
}

export default VehicleDetail;