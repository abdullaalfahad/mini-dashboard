import { AnimatePresence, motion } from "framer-motion";
import type { User } from "./users-table";

export default function UserDetailsModal({
  selectedUser,
  setSelectedUser,
}: {
  selectedUser: User | null;
  setSelectedUser: (user: User | null) => void;
}) {
  return (
    <AnimatePresence>
      <motion.div
        animate={{ opacity: 1 }}
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        onClick={() => setSelectedUser(null)}
      >
        <motion.div
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-2xl shadow-lg max-w-md w-full p-6 relative"
          exit={{ scale: 0.8, opacity: 0 }}
          initial={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            {selectedUser?.name}
          </h2>
          <p className="text-gray-600">
            <b>Email:</b> {selectedUser?.email}
          </p>
          <p className="text-gray-600">
            <b>Phone:</b> {selectedUser?.phone}
          </p>
          <p className="text-gray-600">
            <b>Company:</b> {selectedUser?.company.name}
          </p>
          <p className="text-gray-600">
            <b>Website:</b> {selectedUser?.website}
          </p>
          <p className="text-gray-600">
            <b>Address:</b> {selectedUser?.address.street},{" "}
            {selectedUser?.address.city}
          </p>

          <button
            className="mt-4 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
            onClick={() => setSelectedUser(null)}
            type="button"
          >
            Close
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
