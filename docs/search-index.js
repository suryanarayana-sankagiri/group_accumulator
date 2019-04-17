var N=null,E="",T="t",U="u",searchIndex={};
var R=["accumulator","This method is only public for benchmarking. You should…","classelem","integer","accumulator::hash","verify","Panics if `m == 0`.","is_zero","is_odd","mod_inv","is_perfect_square","is_congruent","is_divisible_u","write_binary","Panics if `buf` is not large enough.","from_be_bytes","to_owned","clone_into","try_from","borrow_mut","try_into","result","type_id","borrow","typeid","accumulator::group","accumulator::proof","accumulator::uint","rsa2048elem","unknown_order_elem_","finalize","partial_cmp","option","ordering","witness","membershipproof","nonmembershipproof","vectorcommitment","vectorproof","ristrettoelem","classgroup","ristretto","formatter","Panics if result overflows.","Panics if result is negative.","add_assign","sub_assign","rem_assign","shl_assign","shr_assign","MembershipProof","AccError","Accumulator","VectorCommitment","ClassGroup","UnknownOrderGroup","ElemFrom","GeneralHasher","NonmembershipProof","VectorProof","ClassElem","RistrettoElem","Rsa2048Elem","Ristretto"];

searchIndex[R[0]]={"doc":"Fast cryptographic accumulator and vector commitment…","i":[[3,R[52],R[0],"A cryptographic accumulator. Wraps a single unknown-order…",N,N],[3,"Witness",E,"A witness to one or more values in an accumulator,…",N,N],[12,"0",E,E,0,N],[3,R[50],E,"A succinct proof of membership (some element is in some…",N,N],[12,R[34],E,"The witness for the element in question.",1,N],[3,R[58],E,"A succinct proof of nonmembership (some element is not in…",N,N],[3,R[53],E,"A vector commitment, wrapping an underlying accumulator.…",N,N],[3,R[59],E,"A vector commitment proof.",N,N],[4,R[51],E,"The different types of accumulator errors.",N,N],[13,"BadWitness",E,"Bad witness.",2,N],[13,"BadWitnessUpdate",E,"Error when updating a witness.",2,N],[13,"DivisionByZero",E,"Division by zero.",2,N],[13,"InexactDivision",E,"Inexact division where exact division was expected.",2,N],[13,"InputsNotCoprime",E,"Inputs not coprime when they were expected to be coprime.",2,N],[4,"VCError",E,"The different types of vector commitment errors.",N,N],[13,"ConflictingIndices",E,"When there are conflicting indices in the vector commitment.",3,N],[13,"InvalidOpen",E,"When an opening fails.",3,N],[13,"UnexpectedState",E,"Unexpected state during an update.",3,N],[11,"empty",E,"Returns a new, empty accumulator.",4,[[],["self"]]],[11,"add",E,"Adds `elems` to the accumulator. This cannot check whether…",4,N],[11,"add_with_proof",E,"A specialized version of `add` that also returns a batch…",4,N],[11,"delete",E,"Removes the elements in `elem_witnesses` from the…",4,N],[11,"delete_with_proof",E,"A specialized version of `delete` that also returns a…",4,N],[11,"prove_membership",E,"Computes the batch membership proof for the elements in…",4,N],[11,"verify_membership",E,"Verifies a membership proof against the current…",4,[[["self"],[T],[R[35]]],["bool"]]],[11,"verify_membership_batch",E,"Batch version of `verify_membership` for multiple `elems`.",4,N],[11,"update_membership_witness",E,"Updates a `witness` for `tracked_elems` w.r.t the current…",4,N],[11,"prove_nonmembership",E,"Computes the batch non-membership proof for the elements…",4,N],[11,"verify_nonmembership",E,"Verifies a non-membership proof against the current…",4,N],[11,"compute_subset_witness",E,"Given a witness for `witness_set`, returns a witness for…",0,N],[11,"compute_individual_witnesses",E,"Given a witness for many `elems`, computes a sub-witness…",0,N],[11,"empty",E,"Initializes a new vector commitment (VC).",5,[[],["self"]]],[11,"update",E,"Updates a VC with a list of values and indices.",5,N],[11,"open",E,"Opens/generates a commitment to indices in the VC.",5,N],[11,R[5],E,"Verifies a commitment to indices in the VC.",5,N],[0,"group",E,"Implementations for different mathematical groups, each of…",N,N],[3,R[60],R[25],"A class group element, which wraps three GMP integers from…",N,N],[3,R[61],E,"A Ristretto group element, directly wrapping a Ristretto…",N,N],[3,R[62],E,"An RSA 2048 group element, directly wrapping a GMP integer…",N,N],[4,R[54],E,"Class group implementation, with future optimizations…",N,N],[4,R[63],E,"Ristretto group implementation (based on the…",N,N],[4,"Rsa2048",E,"RSA-2048 group implementation. Modulus taken from here.…",N,N],[5,"multi_exp",E,"Computes the product of `alpha_i ^ (p(x) / x_i)`, where…",N,N],[11,"normalize",E,R[1],6,N],[11,"reduce",E,R[1],6,N],[11,"square",E,R[1],6,[[[R[2]]],[R[2]]]],[8,"Group",E,"A mathematical group.",N,N],[16,"Elem",E,"The associated group element type for this group.",7,N],[10,"id_",E,"A group-specific wrapper for `id`.",7,N],[10,"op_",E,"A group-specific wrapper for `op`.",7,N],[11,"exp_",E,"A group-specific wrapper for `exp`, although it comes with…",7,N],[10,"inv_",E,"A group-specific wrapper for `inv`.",7,N],[11,"id",E,"Returns the identity element of the group.",7,N],[11,"op",E,"Applies the group operation to elements `a` and `b` and…",7,N],[11,"exp",E,"Applies the group operation to `a` and itself `n` times…",7,N],[11,"inv",E,"Returns the group inverse of `a`.",7,N],[8,R[55],E,"A group containing elements of unknown order.",N,N],[11,"unknown_order_elem",E,"Returns an element of unknown order in the group.",8,N],[10,R[29],E,"A group-specific wrapper for `unknown_order_elem`.",8,N],[8,R[56],E,"Like `From<T>`, but implemented on the `Group` instead of…",N,N],[10,"elem",E,"Returns a group element from an initial value.",9,N],[0,"hash",R[0],"This module wraps `blake2b_rfc` into a convenient hashing…",N,N],[3,"Blake2b",R[4],"Thin wrapper around `Blake2b` from `blake2_rfc`.",N,N],[12,"0",E,E,10,N],[5,"hash",E,"Hash using the general Hasher.",N,N],[5,"blake2b",E,"Calls `hash` with a Blake2b hasher.",N,[[[T]],[R[3]]]],[5,"hash_to_prime",E,"Hashes `t` to an odd prime.",N,[[[T]],[R[3]]]],[0,"primality",E,"Primality testing for U256 inputs. Use `is_prob_prime`…",N,N],[5,"is_prob_prime","accumulator::hash::primality","Implements the Baillie-PSW probabilistic primality test,…",N,[[["u256"]],["bool"]]],[5,"passes_miller_rabin_base_2",E,"A single iteration of the Miller-Rabin test (base-2 Fermat…",N,[[["u256"]],["bool"]]],[5,"passes_lucas",E,"Strong Lucas probable prime test (NOT the more common…",N,[[["u256"]],["bool"]]],[8,R[57],R[4],"Like `std::hash::Hasher`, but general over output type.",N,N],[16,"Output",E,"The associated output type of the Hasher.",11,N],[10,R[30],E,"Similar to `Hasher::finish`, but consumes `self`.",11,N],[0,"proof",R[0],"Succinct proofs over unknown-order groups. These proofs…",N,N],[3,"Poe",R[26],"Struct for NI-PoE.",N,N],[3,"Pokcr",E,"Struct for NI-PoKCR.",N,N],[3,"Poke2",E,"Struct for NI-PoKE2.",N,N],[11,"prove",E,"Computes a proof that `base ^ exp` was performed to derive…",12,N],[11,R[5],E,"Verifies that `base ^ exp = result` using the given proof…",12,N],[11,"prove",E,"Generates an NI-PoKCR proof.",13,N],[11,R[5],E,"Verifies an NI-PoKCR proof.",13,N],[11,"prove",E,"Computes a proof that you know `exp` s.t. `base ^ exp =…",14,N],[11,R[5],E,"Verifies that the prover knows `exp` s.t. `base ^ exp =…",14,N],[0,"uint",R[0],"Zero-allocation U256 and U512 types built on GMP. We…",N,N],[3,"U256",R[27],E,N,N],[3,"U512",E,E,N,N],[5,"u256",E,E,N,[[[T]],["u256"]]],[5,"u512",E,E,N,[[[T]],["u512"]]],[11,"zero",E,E,15,[[],["self"]]],[11,R[7],E,E,15,[[["self"]],["bool"]]],[11,"one",E,E,15,[[],["self"]]],[11,R[8],E,E,15,[[["self"]],["bool"]]],[11,R[9],E,R[6],15,[[["self"],["self"]],[R[32]]]],[11,"pow_mod",E,R[6],15,[[["self"],["self"],["self"]],["self"]]],[11,R[10],E,E,15,[[["self"]],["bool"]]],[11,"jacobi",E,E,15,[[["i32"],["self"]],["i32"]]],[11,R[11],E,E,15,[[["self"],["i32"],["self"]],["bool"]]],[11,R[12],E,E,15,[[["self"],["u64"]],["bool"]]],[11,R[13],E,R[14],15,N],[11,R[15],E,E,15,N],[11,"zero",E,E,16,[[],["self"]]],[11,R[7],E,E,16,[[["self"]],["bool"]]],[11,"one",E,E,16,[[],["self"]]],[11,R[8],E,E,16,[[["self"]],["bool"]]],[11,R[9],E,R[6],16,[[["self"],["self"]],[R[32]]]],[11,"pow_mod",E,R[6],16,[[["self"],["self"],["self"]],["self"]]],[11,R[10],E,E,16,[[["self"]],["bool"]]],[11,"jacobi",E,E,16,[[["i32"],["self"]],["i32"]]],[11,R[11],E,E,16,[[["self"],["i32"],["self"]],["bool"]]],[11,R[12],E,E,16,[[["self"],["u64"]],["bool"]]],[11,R[13],E,R[14],16,N],[11,R[15],E,E,16,N],[11,"low_u256",E,"Returns the lower half of this `U512` as a `U256`. TODO:…",16,[[["self"]],["u256"]]],[11,"remove_factor",E,"Returns (result of removing all `f`s, number of `f`s…",15,N],[0,"util",R[0],"Miscellaneous functions used throughout the library.",N,N],[5,"int","accumulator::util","Convenience wrapper for creating `Rug` integers.",N,[[[T]],[R[3]]]],[5,"prime_hash_product",E,"Hashes its arguments to primes and takes their product.",N,N],[5,"shamir_trick",E,"Computes the `(xy)`th root of `g` given the `x`th and…",N,N],[5,"solve_linear_congruence",E,"Solves a linear congruence of form `ax = b mod m` for the…",N,[[[R[3]],[R[3]],[R[3]]],[R[32]]]],[5,"divide_and_conquer",E,"Folds over `xs` but in a divide-and-conquer fashion:…",N,N],[8,"TypeRep",E,"Pseudo-type-level programming. This trait allows us to…",N,N],[16,"Rep",E,"The associated type of the simulated type-level static…",17,N],[10,"rep",E,"Returns the static data for the type.",17,N],[11,"into",R[0],E,4,[[["self"]],[U]]],[11,R[16],E,E,4,[[["self"]],[T]]],[11,R[17],E,E,4,N],[11,"from",E,E,4,[[[T]],[T]]],[11,R[18],E,E,4,[[[U]],[R[21]]]],[11,R[23],E,E,4,[[["self"]],[T]]],[11,R[22],E,E,4,[[["self"]],[R[24]]]],[11,R[19],E,E,4,[[["self"]],[T]]],[11,R[20],E,E,4,[[["self"]],[R[21]]]],[11,"into",E,E,0,[[["self"]],[U]]],[11,R[16],E,E,0,[[["self"]],[T]]],[11,R[17],E,E,0,N],[11,"from",E,E,0,[[[T]],[T]]],[11,R[18],E,E,0,[[[U]],[R[21]]]],[11,R[23],E,E,0,[[["self"]],[T]]],[11,R[22],E,E,0,[[["self"]],[R[24]]]],[11,R[19],E,E,0,[[["self"]],[T]]],[11,R[20],E,E,0,[[["self"]],[R[21]]]],[11,"into",E,E,1,[[["self"]],[U]]],[11,R[16],E,E,1,[[["self"]],[T]]],[11,R[17],E,E,1,N],[11,"from",E,E,1,[[[T]],[T]]],[11,R[18],E,E,1,[[[U]],[R[21]]]],[11,R[23],E,E,1,[[["self"]],[T]]],[11,R[22],E,E,1,[[["self"]],[R[24]]]],[11,R[19],E,E,1,[[["self"]],[T]]],[11,R[20],E,E,1,[[["self"]],[R[21]]]],[11,"into",E,E,18,[[["self"]],[U]]],[11,R[16],E,E,18,[[["self"]],[T]]],[11,R[17],E,E,18,N],[11,"from",E,E,18,[[[T]],[T]]],[11,R[18],E,E,18,[[[U]],[R[21]]]],[11,R[23],E,E,18,[[["self"]],[T]]],[11,R[22],E,E,18,[[["self"]],[R[24]]]],[11,R[19],E,E,18,[[["self"]],[T]]],[11,R[20],E,E,18,[[["self"]],[R[21]]]],[11,"into",E,E,5,[[["self"]],[U]]],[11,R[16],E,E,5,[[["self"]],[T]]],[11,R[17],E,E,5,N],[11,"from",E,E,5,[[[T]],[T]]],[11,R[18],E,E,5,[[[U]],[R[21]]]],[11,R[23],E,E,5,[[["self"]],[T]]],[11,R[22],E,E,5,[[["self"]],[R[24]]]],[11,R[19],E,E,5,[[["self"]],[T]]],[11,R[20],E,E,5,[[["self"]],[R[21]]]],[11,"into",E,E,19,[[["self"]],[U]]],[11,R[16],E,E,19,[[["self"]],[T]]],[11,R[17],E,E,19,N],[11,"from",E,E,19,[[[T]],[T]]],[11,R[18],E,E,19,[[[U]],[R[21]]]],[11,R[23],E,E,19,[[["self"]],[T]]],[11,R[22],E,E,19,[[["self"]],[R[24]]]],[11,R[19],E,E,19,[[["self"]],[T]]],[11,R[20],E,E,19,[[["self"]],[R[21]]]],[11,"into",E,E,2,[[["self"]],[U]]],[11,"from",E,E,2,[[[T]],[T]]],[11,R[18],E,E,2,[[[U]],[R[21]]]],[11,R[23],E,E,2,[[["self"]],[T]]],[11,R[22],E,E,2,[[["self"]],[R[24]]]],[11,R[19],E,E,2,[[["self"]],[T]]],[11,R[20],E,E,2,[[["self"]],[R[21]]]],[11,"into",E,E,3,[[["self"]],[U]]],[11,"from",E,E,3,[[[T]],[T]]],[11,R[18],E,E,3,[[[U]],[R[21]]]],[11,R[23],E,E,3,[[["self"]],[T]]],[11,R[22],E,E,3,[[["self"]],[R[24]]]],[11,R[19],E,E,3,[[["self"]],[T]]],[11,R[20],E,E,3,[[["self"]],[R[21]]]],[11,"into",R[25],E,20,[[["self"]],[U]]],[11,R[16],E,E,20,[[["self"]],[T]]],[11,R[17],E,E,20,N],[11,"from",E,E,20,[[[T]],[T]]],[11,R[18],E,E,20,[[[U]],[R[21]]]],[11,R[23],E,E,20,[[["self"]],[T]]],[11,R[22],E,E,20,[[["self"]],[R[24]]]],[11,R[19],E,E,20,[[["self"]],[T]]],[11,R[20],E,E,20,[[["self"]],[R[21]]]],[11,"into",E,E,21,[[["self"]],[U]]],[11,R[16],E,E,21,[[["self"]],[T]]],[11,R[17],E,E,21,N],[11,"from",E,E,21,[[[T]],[T]]],[11,R[18],E,E,21,[[[U]],[R[21]]]],[11,R[23],E,E,21,[[["self"]],[T]]],[11,R[22],E,E,21,[[["self"]],[R[24]]]],[11,R[19],E,E,21,[[["self"]],[T]]],[11,R[20],E,E,21,[[["self"]],[R[21]]]],[11,"into",E,E,22,[[["self"]],[U]]],[11,R[16],E,E,22,[[["self"]],[T]]],[11,R[17],E,E,22,N],[11,"from",E,E,22,[[[T]],[T]]],[11,R[18],E,E,22,[[[U]],[R[21]]]],[11,R[23],E,E,22,[[["self"]],[T]]],[11,R[22],E,E,22,[[["self"]],[R[24]]]],[11,R[19],E,E,22,[[["self"]],[T]]],[11,R[20],E,E,22,[[["self"]],[R[21]]]],[11,"into",E,E,6,[[["self"]],[U]]],[11,R[16],E,E,6,[[["self"]],[T]]],[11,R[17],E,E,6,N],[11,"from",E,E,6,[[[T]],[T]]],[11,R[18],E,E,6,[[[U]],[R[21]]]],[11,R[23],E,E,6,[[["self"]],[T]]],[11,R[22],E,E,6,[[["self"]],[R[24]]]],[11,R[19],E,E,6,[[["self"]],[T]]],[11,R[20],E,E,6,[[["self"]],[R[21]]]],[11,"into",E,E,23,[[["self"]],[U]]],[11,R[16],E,E,23,[[["self"]],[T]]],[11,R[17],E,E,23,N],[11,"from",E,E,23,[[[T]],[T]]],[11,R[18],E,E,23,[[[U]],[R[21]]]],[11,R[23],E,E,23,[[["self"]],[T]]],[11,R[22],E,E,23,[[["self"]],[R[24]]]],[11,R[19],E,E,23,[[["self"]],[T]]],[11,R[20],E,E,23,[[["self"]],[R[21]]]],[11,"into",E,E,24,[[["self"]],[U]]],[11,R[16],E,E,24,[[["self"]],[T]]],[11,R[17],E,E,24,N],[11,"from",E,E,24,[[[T]],[T]]],[11,R[18],E,E,24,[[[U]],[R[21]]]],[11,R[23],E,E,24,[[["self"]],[T]]],[11,R[22],E,E,24,[[["self"]],[R[24]]]],[11,R[19],E,E,24,[[["self"]],[T]]],[11,R[20],E,E,24,[[["self"]],[R[21]]]],[11,"into",R[4],E,10,[[["self"]],[U]]],[11,"from",E,E,10,[[[T]],[T]]],[11,R[18],E,E,10,[[[U]],[R[21]]]],[11,R[23],E,E,10,[[["self"]],[T]]],[11,R[22],E,E,10,[[["self"]],[R[24]]]],[11,R[19],E,E,10,[[["self"]],[T]]],[11,R[20],E,E,10,[[["self"]],[R[21]]]],[11,"clear",E,E,10,N],[11,"initialize",E,E,10,N],[11,"into",R[26],E,12,[[["self"]],[U]]],[11,R[16],E,E,12,[[["self"]],[T]]],[11,R[17],E,E,12,N],[11,"from",E,E,12,[[[T]],[T]]],[11,R[18],E,E,12,[[[U]],[R[21]]]],[11,R[23],E,E,12,[[["self"]],[T]]],[11,R[22],E,E,12,[[["self"]],[R[24]]]],[11,R[19],E,E,12,[[["self"]],[T]]],[11,R[20],E,E,12,[[["self"]],[R[21]]]],[11,"into",E,E,13,[[["self"]],[U]]],[11,R[16],E,E,13,[[["self"]],[T]]],[11,R[17],E,E,13,N],[11,"from",E,E,13,[[[T]],[T]]],[11,R[18],E,E,13,[[[U]],[R[21]]]],[11,R[23],E,E,13,[[["self"]],[T]]],[11,R[22],E,E,13,[[["self"]],[R[24]]]],[11,R[19],E,E,13,[[["self"]],[T]]],[11,R[20],E,E,13,[[["self"]],[R[21]]]],[11,"into",E,E,14,[[["self"]],[U]]],[11,R[16],E,E,14,[[["self"]],[T]]],[11,R[17],E,E,14,N],[11,"from",E,E,14,[[[T]],[T]]],[11,R[18],E,E,14,[[[U]],[R[21]]]],[11,R[23],E,E,14,[[["self"]],[T]]],[11,R[22],E,E,14,[[["self"]],[R[24]]]],[11,R[19],E,E,14,[[["self"]],[T]]],[11,R[20],E,E,14,[[["self"]],[R[21]]]],[11,"into",R[27],E,15,[[["self"]],[U]]],[11,R[16],E,E,15,[[["self"]],[T]]],[11,R[17],E,E,15,N],[11,"from",E,E,15,[[[T]],[T]]],[11,R[18],E,E,15,[[[U]],[R[21]]]],[11,R[23],E,E,15,[[["self"]],[T]]],[11,R[22],E,E,15,[[["self"]],[R[24]]]],[11,R[19],E,E,15,[[["self"]],[T]]],[11,R[20],E,E,15,[[["self"]],[R[21]]]],[11,"into",E,E,16,[[["self"]],[U]]],[11,R[16],E,E,16,[[["self"]],[T]]],[11,R[17],E,E,16,N],[11,"from",E,E,16,[[[T]],[T]]],[11,R[18],E,E,16,[[[U]],[R[21]]]],[11,R[23],E,E,16,[[["self"]],[T]]],[11,R[22],E,E,16,[[["self"]],[R[24]]]],[11,R[19],E,E,16,[[["self"]],[T]]],[11,R[20],E,E,16,[[["self"]],[R[21]]]],[11,"op_",R[25],E,6,[[[R[3]],[R[2]],[R[2]]],[R[2]]]],[11,"id_",E,E,6,[[[R[3]]],[R[2]]]],[11,"inv_",E,E,6,[[[R[3]],[R[2]]],[R[2]]]],[11,"exp_",E,E,6,[[[R[3]],[R[2]],[R[3]]],[R[2]]]],[11,"op_",E,E,23,N],[11,"id_",E,E,23,N],[11,"inv_",E,E,23,N],[11,"exp_",E,E,23,N],[11,"op_",E,E,24,[[[R[3]],[R[28]],[R[28]]],[R[28]]]],[11,"id_",E,E,24,[[[R[3]]],[R[28]]]],[11,"inv_",E,E,24,[[[R[3]],[R[28]]],[R[28]]]],[11,"exp_",E,E,24,[[[R[3]],[R[28]],[R[3]]],[R[28]]]],[11,R[29],E,E,6,[[[R[3]]],[R[2]]]],[11,R[29],E,E,24,[[[R[3]]],[R[28]]]],[11,"elem",E,E,6,N],[11,"elem",E,E,24,[[[T]],[R[28]]]],[11,R[30],R[4],E,10,N],[11,"rep",R[25],E,6,N],[11,"rep",E,E,23,N],[11,"rep",E,E,24,N],[11,R[31],R[27],E,15,[[["self"],["self"]],[R[32],[R[33]]]]],[11,R[31],E,E,16,[[["self"],["self"]],[R[32],[R[33]]]]],[11,"default",R[4],E,10,[[],["self"]]],[11,"eq",R[0],E,4,[[["self"],[R[0]]],["bool"]]],[11,"ne",E,E,4,[[["self"],[R[0]]],["bool"]]],[11,"eq",E,E,0,[[["self"],[R[34]]],["bool"]]],[11,"ne",E,E,0,[[["self"],[R[34]]],["bool"]]],[11,"eq",E,E,1,[[["self"],[R[35]]],["bool"]]],[11,"ne",E,E,1,[[["self"],[R[35]]],["bool"]]],[11,"eq",E,E,18,[[["self"],[R[36]]],["bool"]]],[11,"ne",E,E,18,[[["self"],[R[36]]],["bool"]]],[11,"eq",E,E,5,[[["self"],[R[37]]],["bool"]]],[11,"ne",E,E,5,[[["self"],[R[37]]],["bool"]]],[11,"eq",E,E,19,[[["self"],[R[38]]],["bool"]]],[11,"ne",E,E,19,[[["self"],[R[38]]],["bool"]]],[11,"eq",R[25],E,6,[[["self"],[R[40]]],["bool"]]],[11,"eq",E,E,20,[[["self"],["self"]],["bool"]]],[11,"eq",E,E,23,[[["self"],[R[41]]],["bool"]]],[11,"eq",E,E,21,[[["self"],[R[39]]],["bool"]]],[11,"ne",E,E,21,[[["self"],[R[39]]],["bool"]]],[11,"eq",E,E,24,[[["self"],["rsa2048"]],["bool"]]],[11,"eq",E,E,22,[[["self"],[R[28]]],["bool"]]],[11,"ne",E,E,22,[[["self"],[R[28]]],["bool"]]],[11,"eq",R[26],E,12,[[["self"],["poe"]],["bool"]]],[11,"ne",E,E,12,[[["self"],["poe"]],["bool"]]],[11,"eq",E,E,13,[[["self"],["pokcr"]],["bool"]]],[11,"ne",E,E,13,[[["self"],["pokcr"]],["bool"]]],[11,"eq",E,E,14,[[["self"],["poke2"]],["bool"]]],[11,"ne",E,E,14,[[["self"],["poke2"]],["bool"]]],[11,"eq",R[27],E,15,[[["self"],["u256"]],["bool"]]],[11,"ne",E,E,15,[[["self"],["u256"]],["bool"]]],[11,"eq",E,E,15,[[["self"],["u64"]],["bool"]]],[11,"eq",E,E,16,[[["self"],["u512"]],["bool"]]],[11,"ne",E,E,16,[[["self"],["u512"]],["bool"]]],[11,"eq",E,E,16,[[["self"],["u64"]],["bool"]]],[11,"from",R[0],E,4,N],[11,"from",R[27],E,15,N],[11,"from",E,E,15,[[["u64"]],["self"]]],[11,"from",E,E,15,N],[11,"from",E,E,15,N],[11,"from",E,E,16,N],[11,"from",E,E,16,[[["u64"]],["self"]]],[11,"from",E,E,16,N],[11,"from",E,E,16,N],[11,"from",E,E,16,[[["u256"]],["self"]]],[11,"from",E,E,16,[[["u256"]],["self"]]],[11,"cmp",E,E,15,[[["self"],["self"]],[R[33]]]],[11,"cmp",E,E,16,[[["self"],["self"]],[R[33]]]],[11,"clone",R[0],E,4,[[["self"]],["self"]]],[11,"clone",E,E,0,[[["self"]],[R[34]]]],[11,"clone",E,E,1,[[["self"]],[R[35]]]],[11,"clone",E,E,18,[[["self"]],[R[36]]]],[11,"clone",E,E,5,[[["self"]],[R[37]]]],[11,"clone",E,E,19,[[["self"]],[R[38]]]],[11,"clone",R[25],E,6,[[["self"]],[R[40]]]],[11,"clone",E,E,20,[[["self"]],[R[2]]]],[11,"clone",E,E,23,[[["self"]],[R[41]]]],[11,"clone",E,E,21,[[["self"]],[R[39]]]],[11,"clone",E,E,24,[[["self"]],["rsa2048"]]],[11,"clone",E,E,22,[[["self"]],[R[28]]]],[11,"clone",R[26],E,12,[[["self"]],["poe"]]],[11,"clone",E,E,13,[[["self"]],["pokcr"]]],[11,"clone",E,E,14,[[["self"]],["poke2"]]],[11,"clone",R[27],E,15,[[["self"]],["u256"]]],[11,"clone",E,E,16,[[["self"]],["u512"]]],[11,"fmt",R[0],E,2,[[["self"],[R[42]]],[R[21]]]],[11,"fmt",E,E,4,[[["self"],[R[42]]],[R[21]]]],[11,"fmt",E,E,0,[[["self"],[R[42]]],[R[21]]]],[11,"fmt",E,E,1,[[["self"],[R[42]]],[R[21]]]],[11,"fmt",E,E,18,[[["self"],[R[42]]],[R[21]]]],[11,"fmt",E,E,3,[[["self"],[R[42]]],[R[21]]]],[11,"fmt",E,E,5,[[["self"],[R[42]]],[R[21]]]],[11,"fmt",E,E,19,[[["self"],[R[42]]],[R[21]]]],[11,"fmt",R[25],E,6,[[["self"],[R[42]]],[R[21]]]],[11,"fmt",E,E,20,[[["self"],[R[42]]],[R[21]]]],[11,"fmt",E,E,23,[[["self"],[R[42]]],[R[21]]]],[11,"fmt",E,E,21,[[["self"],[R[42]]],[R[21]]]],[11,"fmt",E,E,24,[[["self"],[R[42]]],[R[21]]]],[11,"fmt",E,E,22,[[["self"],[R[42]]],[R[21]]]],[11,"fmt",R[26],E,12,[[["self"],[R[42]]],[R[21]]]],[11,"fmt",E,E,13,[[["self"],[R[42]]],[R[21]]]],[11,"fmt",E,E,14,[[["self"],[R[42]]],[R[21]]]],[11,"fmt",R[27],E,15,[[["self"],[R[42]]],[R[21]]]],[11,"fmt",E,E,16,[[["self"],[R[42]]],[R[21]]]],[11,"add",E,E,15,[[["self"],["self"]],["self"]]],[11,"add",E,R[43],15,[[["self"],["u64"]],["self"]]],[11,"add",E,E,16,[[["self"],["self"]],["self"]]],[11,"add",E,R[43],16,[[["self"],["u64"]],["self"]]],[11,"sub",E,R[44],15,[[["self"],["self"]],["self"]]],[11,"sub",E,R[44],15,[[["self"],["u64"]],["self"]]],[11,"sub",E,R[44],16,[[["self"],["self"]],["self"]]],[11,"sub",E,R[44],16,[[["self"],["u64"]],["self"]]],[11,"mul",E,E,15,[[["self"],["self"]],["u512"]]],[11,"mul",E,E,15,[[["self"],["self"]],["u512"]]],[11,"div",E,E,15,[[["self"],["self"]],["self"]]],[11,"div",E,E,15,[[["self"],["self"]],["self"]]],[11,"div",E,E,16,[[["self"],["self"]],["self"]]],[11,"div",E,E,16,[[["self"],["self"]],["self"]]],[11,"rem",E,E,15,[[["self"],["self"]],["self"]]],[11,"rem",E,E,15,[[["self"],["self"]],["self"]]],[11,"rem",E,E,16,[[["self"],["self"]],["self"]]],[11,"rem",E,E,16,[[["self"],["self"]],["self"]]],[11,"rem",E,E,16,[[["self"],["u256"]],["u256"]]],[11,"rem",E,E,16,[[["self"],["u256"]],["u256"]]],[11,R[45],E,R[43],15,[[["self"],["self"]]]],[11,R[45],E,R[43],16,[[["self"],["self"]]]],[11,R[46],E,R[44],15,[[["self"],["self"]]]],[11,R[46],E,R[44],16,[[["self"],["self"]]]],[11,R[47],E,E,15,[[["self"],["self"]]]],[11,R[47],E,E,15,[[["self"],["self"]]]],[11,R[47],E,E,16,[[["self"],["self"]]]],[11,R[47],E,E,16,[[["self"],["self"]]]],[11,"shl",E,E,15,[[["self"],["u32"]],["self"]]],[11,"shl",E,E,16,[[["self"],["u32"]],["self"]]],[11,"shr",E,E,15,[[["self"],["u32"]],["self"]]],[11,"shr",E,E,16,[[["self"],["u32"]],["self"]]],[11,R[48],E,E,15,[[["self"],["u32"]]]],[11,R[48],E,E,16,[[["self"],["u32"]]]],[11,R[49],E,E,15,[[["self"],["u32"]]]],[11,R[49],E,E,16,[[["self"],["u32"]]]],[11,"hash",R[0],E,4,N],[11,"hash",E,E,0,N],[11,"hash",E,E,1,N],[11,"hash",E,E,18,N],[11,"hash",E,E,5,N],[11,"hash",E,E,19,N],[11,"hash",R[25],E,6,N],[11,"hash",E,E,20,[[["self"],["h"]]]],[11,"hash",E,E,23,N],[11,"hash",E,E,21,[[["self"],["h"]]]],[11,"hash",E,E,24,N],[11,"hash",E,E,22,N],[11,"hash",R[26],E,12,N],[11,"hash",E,E,13,N],[11,"hash",E,E,14,N],[11,"hash",R[27],E,15,N],[11,"hash",E,E,16,N],[11,"finish",R[4],"We could return a truncated hash but it's easier just to…",10,[[["self"]],["u64"]]],[11,"write",E,E,10,N]],"p":[[3,"Witness"],[3,R[50]],[4,R[51]],[4,"VCError"],[3,R[52]],[3,R[53]],[4,R[54]],[8,"Group"],[8,R[55]],[8,R[56]],[3,"Blake2b"],[8,R[57]],[3,"Poe"],[3,"Pokcr"],[3,"Poke2"],[3,"U256"],[3,"U512"],[8,"TypeRep"],[3,R[58]],[3,R[59]],[3,R[60]],[3,R[61]],[3,R[62]],[4,R[63]],[4,"Rsa2048"]]};
initSearch(searchIndex);addSearchOptions(searchIndex);