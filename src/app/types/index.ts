  export type Drop = {
    id:number;
    name: string;
    date: string;
    media?:string;
    lat: number;
    lng: number;
  }

  export type MapProps = {
    drops: Drop[];
  }

  export type MarkerProps = {
    drop: Drop;
  }

  export type PopupProps = {
    drop: Drop;
  }