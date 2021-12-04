// var admin = require("firebase-admin");

// var serviceAccount = require("./rescue-01.json");


// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://sample-project-e1a84.firebaseio.com"
// })

// module.exports.admin = admin


import admin from 'firebase-admin'

// import serviceAccount from './rescue-01.json'

const serviceAccount = {
  "type": "service_account",
  "project_id": "rescue-01",
  "private_key_id": "1a5bf0e23ebf6589f19a575873f8bc0f66057cf1",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCZpsh5QppIv53e\nmW92p1wlh5X3QJjrRanTkcjjpioM280J1EXnm7ZVtk0rOLF95MEsURWLOUqG1uwi\nBZiOcCIg3aRiaJEUmrx37vo8naeOv3pYO6ZbYnJnvdNPXJIcQAJsZN9r9Kae1w9O\ngEBst5wUZc/L63igB62PH/fQIgN6XzvOLKEPf9axyFBQ32hoYjZkD45LySiCfAn/\nnw7iZVes8bQpitajOEKUiTZkNlOaaqUwVA7x2u/duw2ALOmvgqlVj2/ZvXNAx5QJ\n2cuJuveg2/astxP6gUgV466ubH3vYgU9Q4vIZIGx8lwOlC8G2s200vHuB7Oa2Fs/\n9X1duFzbAgMBAAECggEAKi0na222VxDOH2vDtnDDMQQSTL/9GdvR/aLPX3ndohD1\nq+SKWcSa3NVBQoN56SJRSj5pqQFNbUzynXYmxbaPD7F3bZHhfSPqZwuAwgHOnDcA\nONcK15vi5oorRmYVL078u09HKuWJlSFYcMZwqMcPv2OhEgstXdQttpNiXU3w4XZ0\n227MODP74HSQmyEBSAWDJAQImIUkUqjQInNLv6noTl5s/sZ8ee+pEkEdbIfizalu\nXt62l4P3RrNkbefQi1M1FZrQaQkofiM4QdNxPlOp1Jdx8mIIz3jPz49l6QFZ84Rw\n9snxLOBSV2GIzkQ0BBtWGocG3aq6/a/eZW/qTCRkcQKBgQDISFvnqScew5pT5l52\nvIrlesDA231EkdEvHA6My9aTckGPPuwfuSOh+27LigBj9snCBi19VnUeoL+QgDHl\nLsaTQMePuNz5hFuiUvDZIvnLVvU5jOKyJcbQwWemnoGCKfPFFMSIE3IYNXkP0v6x\nKLs9AKZLI0WnPE/Z3iqTHfoEKwKBgQDEZXeW06Qlb2TD+ZqwNeFNt1ld+F9YgyPn\nHcaCmdp3Wh63oVyLzdo1/5iMDqcimRZhl2lTH+laYBnVQN5FzDISo9sbm2aTkw6/\n/9/GOdvNndJo8GKkVlTFUn0/peHu+QSRYftPvjt9ZE/pqvkmr+PzWgsltEW8PtgG\nPa2h5KFCEQKBgQCjqMU48zddYzcL0hZk7kKNrJYvweuGCaWm2kVldfe8esPpuuAW\nOCJO7femaPlStko9uvCXF/wScAa5nJepEGUB1RB9d/FSD38VkLLwrCz0pPUz9tUT\n/9yLn08Ej0eCxqdE52iFTWaRM7jeXmry9zaxbYN1qLf1JUqW3H1rxDYWCwKBgQCm\nKAozSr83BLVFsCkVJ6CD9bjf7cAMzHZVlDVcTPotu8r9JMF9bh1NTf8rj0IL3WS4\nEDeFohv04BU6/HSQrJ84cfRvuNvhwqrZ+YrC1DSIExvuuGFcE8YIYy+f56HsYjVh\nInpSDumZvoJ1eLbt6iV6vxVrQsc06h4tuYTq0Nk1YQKBgQCXVBDvvIetl2E7J1Ur\nz6eQ2VPpX3dvHpaVjPF7N5qS9LJpimCHYqfp9xzeEY0nG2CYGiujsgFSXnAt/+9L\nsR6cSU+FPDHJV4/K3SFkac5aWYfAH4UtfhlHS9i/IQRP2n7gRGqA7YLI1kgR7I+K\nNsVfyW2lt7N1OiYjxQ6Ok0pvVA==\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-qbx3a@rescue-01.iam.gserviceaccount.com",
  "client_id": "106467067146458793241",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-qbx3a%40rescue-01.iam.gserviceaccount.com"
}

 
export const adminConfig = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://sample-project-e1a84.firebaseio.com"
})

