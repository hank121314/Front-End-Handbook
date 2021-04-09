## Execution Contexts

| Component             | Purpose                                                                                                                                                                                                                              |
|-----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| code evaluation state | Any state needed to perform, suspend, and resume evaluation of the code associated with this   execution context. ex. eval()                                                                                                         |
| Function              | If this execution context is evaluating the code of a function object, then the value of this component is that function object.  If the context is evaluating the code of a Script or Module, the value is null.                    |
| Script/Module         | The Module Record or Script Record from which associated code originates.  If there is no originating script or module, as is the case for the original execution context created in `InitializeHostDefinedRealm`,  the value is null. |
| Realm(New proposal)   | The Realm Record from which associated code accesses ECMAScript resources.                                                                                                                                                           ||

