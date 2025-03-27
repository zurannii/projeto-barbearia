export interface ScheduleAppointmentMonthResponse {
    year: number,
    month: number
    scheduledAppointments: ClientSchedulesAppointmentResponse []
}

export interface ClientSchedulesAppointmentResponse {
    id: number
    day: number
    startAt: Date
    endAt: Date
    clientId: number
    clientName: string
}

export interface SaveScheduleResponse {
    id: number
    startAt: Date
    endAt: Date
    clientId: number

}

export interface SaveScheduleRequest {
    startAt: Date
    endAt: Date
    clientId: number

}

// Export the required models to make them available for import in other files.

export interface ClientScheduleAppointmentModel {
    id: string;
    clientId: string;
    startAt: Date;
    endAt: Date;
  }
  
  export interface SaveScheduleModel {
    clientId: string;
    startAt: Date;
    endAt: Date;
  }
  
  export interface ScheduleAppointementMonthModel {
    year: number;
    month: number;
    appointments: ClientScheduleAppointmentModel[];
  }
  
  export interface SelectClientModel {
    id: string;
    name: string;
  }