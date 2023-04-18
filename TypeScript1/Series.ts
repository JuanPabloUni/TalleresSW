export class Series {
    private id: number;
    private name: string;
    private channel: string;
    private seasons: number;
    
    constructor(id: number, name: string, channel: string, seasons: number) {
      this.id = id;
      this.name = name;
      this.channel = channel;
      this.seasons = seasons;
    }
    
    public getId(): number {
      return this.id;
    }
    
    public getName(): string {
      return this.name;
    }
    
    public getChannel(): string {
      return this.channel;
    }
    
    public getSeasons(): number {
      return this.seasons;
    }
  }
  