puts "Reset data"

Location.destroy_all
Golfpro.destroy_all
Client.destroy_all
Appointment.destroy_all

puts "🌱 Seeding spices..."

$location_data = [
  { 
    id: "1",
    name:"Seattle Golf",
    address:"999 9th st Seattle WA 90000", 
    phone: "1234567890"
  },{
    id: "2",
    name:"Illinois Golf",
    address:"543 dr Champaign IL 90000", 
    phone:"1235567890"
  },
  {
    id: "3",
    name:"Indiana Golf",
    address:"0909 PL SW Bloomington Indiana 90000", 
    phone:"1234567890"
  },
]
$golfpro_data = [
  { 
    name:"Astin Gamgee" ,
    email:"pupper_lover@gmail.com",
    phone:"1234567890",
    location_id:"1"
  },  
  {
    name:"Sal Baker" ,
    email:"sal_is_a_baker@gmail.com",
    phone:"1234567890",
    location_id:"1"
  },
  {
    name:"Liv Arwen" ,
    email:"wood_elf@gmail.com",
    phone:"1234567890",
    location_id:"2"
  },
  {
    name:"Tom Hebert" ,
    email:"Tomtom@gmail.com",
    phone:"1234567890",
    location_id:"3"
  },
]

$client_data = [
  {
    name:"Bella	Knox",
    phone:"1234567890",
    comment:"want to working on driver",
  },{
    name:"Julia	Cameron",
    phone:"1234567890",
    comment:"want to working on iron",
  },{
    name:"Dan	Davidson",
    phone:"1234567890",
    comment:"want to working on short game",
  },{
    name:"Piers	Hemmings",
    phone:"1234567890",
    comment:"want to working on putter",
  },{
    name:"Diane	Young",
    phone:"1234567890",
    comment:"lesson #3",
  },{
    name:"Sally	Dowd",
    phone:"1234567890",
    comment:"first time golfer",
  },{
    name:"Blake	Wilson",
    phone:"1234567890",
    comment:"lesson #5",
  }
]

$location_data.each{|l| Location.create(l)}
$golfpro_data.each{|p| Golfpro.create(p)}
$client_data.each{|c| Client.create(c)}

10.times {
  Appointment.create({
    time: Time.now,
    golfpro_id: Golfpro.all.sample.id,
    client_id: Client.all.sample.id
  })
  }

puts "✅ Done seeding!"
