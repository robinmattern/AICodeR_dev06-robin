```mermaid 
graph TD
    A[User Query] --> B[Base Language Model]
    A --> C[Document Retriever]
    C --> D[Legal Case Database]
    D --> E[Retrieved Relevant Cases]
    E --> F[Context Augmentation]
    B --> F
    F --> G[Generate Response]
    G --> H[Final Answer to User]