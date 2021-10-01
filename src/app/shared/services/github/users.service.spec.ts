import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { UsersService } from './users.service';
import { environment } from '../../../../environments/environment';

describe('UsersService', () => {
  let url = environment.GITHUB_API_URL;
  let service: UsersService;
  let http: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsersService],
    });
    service = TestBed.inject(UsersService);
    http = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  afterEach(() => {
    http.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return data for getAll', () => {
    const data = [
      { id: 1 },
    ];
    service.getAll().subscribe(val => {
      expect(val.length).toBe(1);
    });

    const req = http.expectOne(`${url}/users`);
    expect(req.request.method).toEqual('GET');
    req.flush(data);
  });
});
