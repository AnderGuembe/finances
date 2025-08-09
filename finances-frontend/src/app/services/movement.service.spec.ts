import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MovementService } from './movement.service';

describe('MovementService', () => {
  let service: MovementService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovementService]
    });

    service = TestBed.inject(MovementService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Ensure no outstanding requests remain
  });

  it('should retrieve movements with pagination', () => {
    const dummyResponse = {
      content: [
        {
          id: 1,
          description: 'Test movement',
          amount: 100,
          date: '2025-08-01',
          isIncome: true,
          category: { id: 1, name: 'Salary' }
        }
      ],
      totalElements: 1
    };

    service.getMovements(0, 5).subscribe(data => {
      expect(data.content.length).toBe(1);
      expect(data.content[0].description).toBe('Test movement');
      expect(data.totalElements).toBe(1);
      
    });

    const req = httpMock.expectOne(
      req => req.method === 'GET' &&
             req.url === 'http://localhost:8080/api/movements' &&
             req.params.get('page') === '0' &&
             req.params.get('size') === '5'
    );

    expect(req.request.method).toBe('GET');
    req.flush(dummyResponse);
  });
});
