## Objective: Implement an Interactive Front-End for EV Traffic Simulation in Highways

* **Research question**
    * How should a graphic interface for showing the progress of the simulation look like?
    * What tools, paradigms, etc. should be used?
    * What are the existing standards for integration to vehicle bus?

* **Method**
    * Define and understand requirements
    * Analyze functionality architecture and data-structures of the simulation tool
    * Plan, design, implement. (Simulation tool is Python-based)

Details of previous work can be found here: http://www.i13.in.tum.de/fileadmin/w00bof/www/PDF/TTE_2016.pdf

-----------------------------------

### HIGH LEVEL REQUIREMENTS

**Two Front-End requirements: one for the simulation manager and one for the EV/driver**

#### 1. SIMULATION MANAGER

a. As simulation manager, I want to see a summary of the states of the different cars currently in the highway, so that I can follow the development of each EV. States include:

    self.stats = pd.DataFrame(columns = ['time', 'position', 'geo_position', 'distance_travelled',
                                         'time_travelled', 'time_waited', 'time_charged', 'time_driven',
                                         'battery_level', 'speed', 'driving_flag','schedule_status'])

    schedule: self.schedule.schedule_entries, which is a dict(id='auto defined', dict(
                                         station='charging station id, optional if km given ',
                                         km='position of charging station, optional if km is given',
                                         target_soc='target SOC level on departure, optional',
                                         type='ChargingStation or ChargingZone',
                                         range='can contain start and endpoint of charging zone, mandatory for type ChargingZone'))

b. As a simulation manager, I want to see a summary of states of the different charging stations, so that I can follow the development of each CS
info available as stats with following form:

    self.stats = pd.DataFrame(columns=['time', 'queue_length', 'busy_poles_fc', 'busy_poles_tsc',
                                       'arrived_cars', 'leaving_cars', 'queued_cars', 'plugged_cars',
                                       'energy_consumed', 'energy_produced', 'energy_stored', 'energy_bought',
                                       'queue_prediction_fc', 'queue_prediction_tsc'])
                                           
    self.schedule -- a dict(booking_id:dict('ev','start','duration','charging_technology','binding','confirmed')


c. As a simulation manager, I want to see aggregatged and cummulative statistics of EV and CS stats.

#### 2. EV/DRIVER

a. As a user, I want to see my position in the map, so I know where I am at every time.

b. As a user, I want to enter a destination, so that the system can calculate my charging route.

    (set ev.trip = {'start_exit': start_exit, 'start_time': start_time, 'end_exit': end_exit, 'increasing_direction': increasing_direction, 'highway': highway}
    
c. As a user, I want to see my scheduled stops, so that I know when I am planning to stop:

    (ev.schedule.schedule_entries)
    
d. As a user, I want to be informed when I get close to the next scheduled stop, so that I know that I will need to stop

    (if abs(ev.state.next_scheduled_stop - ev.position) <= A_GIVEN_DISTANCE_IN_KM)

e. As a user, I want to know see the battery_level `(ev.current_battery_level)`, the distance to destination `(abs(ev.destination-ev.position))` and distance to next scheduled stop `(abs(ev.state.next_scheduled_stop - ev.position))`, so that I have an overview of the remaining part of my trip.