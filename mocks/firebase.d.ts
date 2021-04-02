export interface DatabaseDocument {
  id: string;
  _collections?: DatabaseCollections;
  [key: string]: unknown;
}

export interface DatabaseCollections {
  [collectionName: string]: Array<DatabaseDocument> | undefined;
}

export type FakeFirestoreDocumentData = Record<string, unknown>;

export interface StubOverrides {
  database?: DatabaseCollections;
  currentUser?: unknown; // User, to be defined later
}

export interface FirebaseMock {
  initializeApp: jest.Mock;
  credential: {
    cert: jest.Mock;
  };
  auth(): unknown; // Auth, to be defined later
  firestore(): unknown; // Firestore, to be defined later
}

export const firebaseStub: (overrides?: StubOverrides) => FirebaseMock;
export const mockFirebase: (overrides?: StubOverrides) => void;
export const mockInitializeApp: jest.Mock;
export const mockCert: jest.Mock;
